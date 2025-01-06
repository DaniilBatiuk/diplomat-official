import { type FileRouter, createUploadthing } from 'uploadthing/next'

const f = createUploadthing()

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug

  imageUploader: f({ image: { maxFileSize: '8MB', maxFileCount: 10 } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({}) => {
      return { userId: 'user.id ' }
    })
    .onUploadComplete(async ({ metadata }) => {
      return { uploadedBy: metadata.userId }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
