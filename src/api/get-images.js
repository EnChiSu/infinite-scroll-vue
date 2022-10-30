import axios from 'axios';

const getImages = async function(page, limit) {
    return await axios.get('https://picsum.photos/v2/list', {
            params: {
                limit,
                page
            },
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        })
};

export default getImages