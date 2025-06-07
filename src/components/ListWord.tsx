import  { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import request from '../utils/request';
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { IWord, IData } from '../interface/interfaces';

export const ListWord = () => {
    const user = useSelector((state: RootState) => state.user.value);
    const [data, setData] = useState<IWord[]>([]);
    const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

    useEffect(() => {
        const parsedUser = user ? JSON.parse(user) : null;
        const fetchWords = async () => {
            try {
                const response = await request<IData>("GET", `api/words/${parsedUser?.sub}`);
                setData(
                    response.data?.map((item: any) => ({
                        word: item.word,
                        definition: item.definition,
                        example: item.example,
                        partOfSpeech: item.partOfSpeech,
                        image: item.image || null
                    }))
                );
            } catch (error) {
                console.error("Error fetching words:", error);
            }
        };

        fetchWords();
    }, []);

    const toggleExpand = (index: number) => {
        setExpandedIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl mx-auto p-4"
        >
            <div className="text-2xl font-bold mb-4 text-center">
                Vocabulary List
            </div>

            {data.map((item, index) => {
                const isExpanded = expandedIndexes.includes(index);
                return (
                    <motion.div
                        key={index}
                        layout
                        initial={{ borderRadius: 16 }}
                        className="bg-white shadow-md rounded-2xl p-4 mb-4 cursor-pointer transition-all duration-300"
                        onClick={() => toggleExpand(index)}
                    >
                        <AnimatePresence>
                            {!isExpanded && (
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-xl font-semibold text-blue-600"
                                >
                                    {item.word}
                                </motion.h3>
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {isExpanded && item.image && (
                                <motion.img
                                    key="image"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4 }}
                                    src={typeof item.image === 'string' ? item.image : URL.createObjectURL(item.image)}
                                    alt={item.word}
                                    className="rounded-xl mt-2 w-full object-contain max-h-60"
                                />
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};
