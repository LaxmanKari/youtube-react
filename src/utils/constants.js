//don't keep it here, keep it in env file (secure)
const GOOGLE_API_KEY = "AIzaSyBofT34EtJ6hvorOjy_c953ODdB3nHP1rM"

export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="
                     + GOOGLE_API_KEY; 

export const YOUTUBE_SEARCH_SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="; 




