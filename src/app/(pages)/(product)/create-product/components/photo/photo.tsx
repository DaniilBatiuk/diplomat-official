'use client'

import { generateUploadDropzone } from '@uploadthing/react'
import '@uploadthing/react/styles.css'
import clsx from 'clsx'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { ReactSortable } from 'react-sortablejs'

import { ICONS } from '@/utils/config/icons'

import './photo.scss'
import { OurFileRouter } from '@/app/api/uploadthing/core'

type photoProp = {
  photos: { id: string; url: string }[]
  setPhotos: Dispatch<SetStateAction<{ id: string; url: string }[]>>
}

export const Photo: React.FC<photoProp> = ({ photos, setPhotos }: photoProp) => {
  const UploadDropzone = generateUploadDropzone<OurFileRouter>()

  const handlerDelete = (photo: { id: string; url: string }) => {
    setPhotos(prev => prev.filter(currentPhoto => currentPhoto.id !== photo.id))
  }

  return (
    <div className='photo__content'>
      <UploadDropzone
        endpoint='imageUploader'
        className='images_upload'
        onClientUploadComplete={res => {
          setPhotos(prev => [
            ...prev,
            ...res.map(photo => ({
              id: photo.key,
              url: photo.url,
            })),
          ])
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`)
        }}
      />
      {photos.length > 0 && (
        <ReactSortable id='list' list={photos} setList={setPhotos} className='photo__list'>
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={clsx('photo__item', {
                ['full-width']: index === 0,
              })}
            >
              <Image width={1280} height={1280} priority={true} src={photo.url} alt={`Image`} />
              {ICONS.deleteImage({ className: 'delete', onClick: () => handlerDelete(photo) })}
            </div>
          ))}
        </ReactSortable>
      )}
    </div>
  )
}
