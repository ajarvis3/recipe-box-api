const getJwtSecret = () => {
   return process.env.SECRET ?? process.env.secret;
};

export default getJwtSecret;
