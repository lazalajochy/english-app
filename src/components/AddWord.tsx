import { useState } from "react";
import request from "../utils/request";
import { RootState } from "../store";
import { useSelector } from "react-redux";


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
        <div id="Addword" className="w-full bg-white py-5">
            <div className="max-w-[800px] mx-auto px-6">
                <p className="text-gray-700 font-extrabold text-3xl sm:text-4xl text-center uppercase mb-8">
                    Add a New Word
                </p>

                <form className="space-y-6  p-6 rounded-xl shadow-md" onSubmit={sendData}>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Word</label>
                        <input
                            type="text"
                            name="word"
                            value={word.word}
                            onChange={handleChange}
                            placeholder="Enter the word"
                            className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:ring-2 px-4 py-3 text-gray-700 placeholder-gray-400 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Definition</label>
                        <textarea
                            name="definition"
                            value={word.definition}
                            onChange={handleChange}
                            placeholder="Enter the definition"
                            rows={4}
                            className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:ring-2 px-4 py-3 text-gray-700 placeholder-gray-400 transition"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Example Sentence</label>
                        <textarea
                            name="example"
                            value={word.example}
                            onChange={handleChange}
                            placeholder="Enter an example sentence"
                            rows={4}
                            className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:ring-2 px-4 py-3 text-gray-700 placeholder-gray-400 transition"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Part of Speech</label>
                        <select
                            name="partOfSpeech"
                            value={word.partOfSpeech}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:ring-2 px-4 py-3 text-gray-700 transition"
                        >
                            <option value="">-- Select --</option>
                            <option value="noun">Noun</option>
                            <option value="verb">Verb</option>
                            <option value="adjective">Adjective</option>
                            <option value="adverb">Adverb</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Select a picture</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:ring-2 px-4 py-2 text-gray-700 transition"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-[#00df9a]  text-white font-semibold rounded-lg px-4 py-3 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            Add Word
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};
