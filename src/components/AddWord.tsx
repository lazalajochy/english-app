import { useState } from "react";
import request from "../utils/request";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";


export const AddWord = () => {
    const user = useSelector((state: RootState) => state.user.value);

    const [word, setWord] = useState({
        word: "",
        definition: "",
        example: "",
        partOfSpeech: "",
        image: null as File | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setWord((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setWord((prev) => ({
            ...prev,
            image: file
        }));
    };

    const sendData = async (e: React.FormEvent) => {
        e.preventDefault();
        const parsedUser = user ? JSON.parse(user) : null;
        const formData = new FormData();
        formData.append("word", word.word);
        formData.append("definition", word.definition);
        formData.append("example", word.example);
        formData.append("partOfSpeech", word.partOfSpeech);
        formData.append("userId", parsedUser?.sub || "");


        if (word.image) {
            formData.append("image", word.image);
        }

        try {
            await request("POST", "api/words", formData);
        } catch (error) {

        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl mx-auto p-4"
        >
                <h1 className="text-2xl font-bold mb-4">Add a New Word</h1>
                <form className="space-y-4" onSubmit={sendData}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Word</label>
                        <input
                            type="text"
                            name="word"
                            value={word.word}
                            onChange={handleChange}
                            className="mt-1 block w-full h-[50px] border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter the word"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Definition</label>
                        <textarea
                            name="definition"
                            value={word.definition}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter the definition"
                            rows={4}
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Example Sentence</label>
                        <textarea
                            name="example"
                            value={word.example}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enter an example sentence"
                            rows={4}
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Part of Speech</label>
                        <select
                            name="partOfSpeech"
                            value={word.partOfSpeech}
                            onChange={handleChange}
                            className="mt-1 block w-full h-[50px] border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="">--Select--</option>
                            <option value="noun">Noun</option>
                            <option value="verb">Verb</option>
                            <option value="adjective">Adjective</option>
                            <option value="adverb">Adverb</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Select a picture</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="mt-1 block w-full h-[50px] border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full h-[50px] bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
                        >
                            Add Word
                        </button>
                    </div>
                </form>
            
        </motion.div>
    );
};
