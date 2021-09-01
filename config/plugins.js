module.exports = ({ env }) => ({
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME','codestorm-techs'),
        api_key: env('CLOUDINARY_KEY','614218712988635'),
        api_secret: env('CLOUDINARY_SECRET','CLOUDINARY_URL=cloudinary://614218712988635:lVdVKdNgPbf8qxcTaWyzufNmGJQ@codestorm-techs'),
      },
    },
  });