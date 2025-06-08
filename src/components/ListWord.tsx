import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import request from '../utils/request';
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { IWord, IData } from '../interface/interfaces';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'



export const ListWord = () => {
    const user = useSelector((state: RootState) => state.user.value);
    const [data, setData] = useState<IWord[]>([]);
    const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes())
        }
    }, [emblaApi])


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
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
                {data.map((item, index) => {
                    const isExpanded = expandedIndexes.includes(index);
                    return (
                        <motion.div
                            key={index}
                            layout
                            initial={{ borderRadius: 16 }}
                            className="min-w-[50%] h-[325px] bg-white/90 shadow-2xl border border-gray-200 rounded-2xl p-4 mx-2 cursor-pointer transition-all duration-300"
                            onClick={() => toggleExpand(index)}
                        >
                            <AnimatePresence>
                                {!isExpanded && (
                                    <motion.h3
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-xl font-semibold text-center flex items-center justify-center h-full"
                                    >
                                        <div>
                                            <div className='text-gray-700 text-3xl '>
                                                {item.word}
                                            </div>
                                            <div className='text-gray-500 text-2xl'>
                                                {item?.example}
                                            </div>
                                        </div>
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
                                        src={
                                            typeof item.image === 'string'
                                                ? item.image
                                                : URL.createObjectURL(item.image)
                                        }
                                        alt={item.word}
                                        className="rounded-xl mt-2 w-full object-contain max-h-70"
                                    />
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </div>

    );
};
