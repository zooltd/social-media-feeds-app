import React, { useState } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { Post, User } from '../constants/types'
import { CreatePost } from '../utils/data'

interface CreatePinProps {
  user: User
  setPins: React.Dispatch<React.SetStateAction<Post[]>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateArticle: React.FC<CreatePinProps> = ({ user, setPins, setLoading }) => {
  const [postBody, setPostBody] = useState('')
  const [imageUrl, setImageUrl] = useState<string | undefined>()

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const allowedTypes = ['image/png', 'image/svg', 'image/jpeg', 'image/gif', 'image/tiff']
    const selectedFile = (e.target.files != null) ? e.target.files[0] : null
    if ((selectedFile == null) || !allowedTypes.includes(selectedFile.type)) return
    const reader = new FileReader()
    reader.readAsDataURL(selectedFile)
    reader.onload = () => {
      setImageUrl(reader.result as string)
    }
  }

  const publish = (): void => {
    setLoading(true)
    CreatePost(user, imageUrl, postBody, +new Date()).then(post => {
      setPins(prev => [post, ...prev])
      clear()
      setLoading(false)
    }).catch(e => console.error(e))
  }

  const clear = (): void => {
    setImageUrl(undefined)
    setPostBody('')
  }

  return (
    <div className="flex flex-col justify-center items-center lg:h-4/5 w-full">
      <div
        className="flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 w-full shadow-md rounded-md">
        <div className="bg-gray-100 p-3 flex flex-0.7 w-full rounded-md">
          <div
            className="flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-200">
            {(imageUrl === undefined)
              ? (
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
                )
              : (
                <div className="relative h-full">
                  <img
                    src={imageUrl}
                    alt="uploaded-pic"
                    className="h-full w-full"
                  />
                  <button
                    type="button"
                    className="absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                    onClick={() => setImageUrl(undefined)}
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
                              className="rounded-md ring-1 outline-none ring-gray-300 focus:ring-2 focus:ring-pink-400
                                           w-full px-4 py-2 text-gray-700 bg-slate-50 bg-clip-padding transition ease-in-out resize-none"/>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={clear}
              className="bg-cyan-700 text-white font-bold p-2 rounded-md w-28 outline-none hover:bg-cyan-300"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={publish}
              className="bg-pink-400 text-white font-bold p-2 rounded-md w-28 outline-none hover:bg-pink-300"
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateArticle
