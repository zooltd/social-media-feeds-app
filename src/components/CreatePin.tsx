import React, {useState} from 'react';
import {User} from "../constants/types";
import {AiOutlineCloudUpload} from "react-icons/ai";
import {MdDelete} from "react-icons/md";

interface CreatePinProps {
}

const CreatePin: React.FC<CreatePinProps> = () => {
    const [postBody, setPostBody] = useState('');
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const allowedTypes = ['image/png', 'image/svg', 'image/jpeg', 'image/gif', 'image/tiff'];
        const selectedFile = e.target.files ? e.target.files[0] : null;
        if (!selectedFile || !allowedTypes.includes(selectedFile.type)) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = () => {
            setImageUrl(reader.result as string);
        };
    }

    const savePin = () => {

    }

    return (
        <div className="m-2 flex flex-col justify-center items-center lg:h-4/5 ">
            <div className="flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 w-full shadow-md">
                <div className="bg-secondaryColor p-3 flex flex-0.7 w-full">
                    <div
                        className="flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-200">
                        {!imageUrl ? (
                            <label>
                                <div className="flex flex-col items-center justify-center h-full">
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="font-bold text-4xl">
                                            <AiOutlineCloudUpload/>
                                        </p>
                                        <p className="text-lg">Click to upload</p>
                                    </div>

                                    <p className="text-gray-400 text-center text-sm">
                                        Allowed file extensions: JPG, JPEG, SVG, PNG, GIF, TIFF
                                    </p>
                                </div>
                                <input
                                    type="file"
                                    name="upload-image"
                                    onChange={uploadImage}
                                    className="w-0 h-0"
                                />
                            </label>
                        ) : (
                            <div className="relative h-full">
                                <img
                                    src={imageUrl}
                                    alt="uploaded-pic"
                                    className="h-full w-full"
                                />
                                <button
                                    type="button"
                                    className="absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                                    onClick={() => setImageUrl(null)}
                                >
                                    <MdDelete/>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-1 flex-col gap-6 lg:pl-5 mt-4 w-full">
                    <textarea rows={5}
                              placeholder="Your message"
                              value={postBody}
                              onChange={(e) => setPostBody(e.target.value)}
                              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-50 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none"/>


                    <div className="flex justify-between mt-2">
                        <button
                            type="button"
                            onClick={savePin}
                            className="bg-gray-500 text-white font-bold p-2 rounded-full w-28 outline-none"
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            onClick={savePin}
                            className="bg-red-500 text-white font-bold p-2 rounded-full w-28 outline-none"
                        >
                            Save Pin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CreatePin;
