import { useState, useEffect } from "react";
import styled from "styled-components";

const Recomendados = () => {

        const baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D'
        const [videos, setVideos] = useState<Array<any>>([]);
        const [channelName, setChannelName] = useState('');
        const currentChannelId = 'UCAR76PvwLHcHqnbqFIos_Xg' // Aca va el CHANNEL ID de Youtube
        
        const [videos2, setVideos2] = useState<Array<any>>([]);
        const [channelName2, setChannelName2] = useState('');
        const currentChannelId2 = 'UC4514FwdRy5gI6CdC9GPb0w' // Aca va el CHANNEL ID de Youtube

        const [videos3, setVideos3] = useState<Array<any>>([]);
        const [channelName3, setChannelName3] = useState('');
        const currentChannelId3 = 'UCrkjd_Kk3uFQWxGPmofeNsQ' // Aca va el CHANNEL ID de Youtube

        useEffect(() => {
            (async () => {
                const data = await fetch (`${baseUrl}${currentChannelId}`)
                .then(response => response.json())
                setVideos(data.items); 
                setChannelName(data.items[0].author);

                const data2 = await fetch (`${baseUrl}${currentChannelId2}`)
                .then(response => response.json())
                setVideos2(data2.items); 
                setChannelName2(data2.items[0].author);

                const data3 = await fetch (`${baseUrl}${currentChannelId3}`)
                .then(response => response.json())
                setVideos3(data3.items); 
                setChannelName3(data3.items[0].author);

            })();
        },[]);

    return ( 
        <RecomendadosContainer>
            <div className="videos-box col-12">
                <a target="_blank" href={`https://www.youtube.com/channel/${currentChannelId}`}>
                <h1>{channelName}</h1>
                </a>
                <div className="channel col-12">
                    {videos.slice(0,4).map (video => 
                        (
                        <div key={video.guid} className="videos-items col-3">
                            <div className="video_image">
                                <a href={video.link} target="_blank">
                                <img src={`https://i4.ytimg.com/vi/${video.guid.split(':')[2]}/mqdefault.jpg`} alt="" />
                                </a>
                            </div>
                            {/* <div className="footer">
                                <h3>{video.title}</h3>
                            </div> */}
                        </div>
                        ))}
                </div>
            </div>
            <div className="videos-box col-12">
                <a target="_blank" href={`https://www.youtube.com/channel/${currentChannelId2}`}>
                    <h1>{channelName2}</h1>
                </a>
                <div className="channel col-12">
                    {videos2.slice(0,4).map (video2 => 
                        (
                        <div key={video2.guid} className="videos-items col-3">
                            <div className="video_image">
                                <a href={video2.link} target="_blank">
                                <img src={`https://i4.ytimg.com/vi/${video2.guid.split(':')[2]}/mqdefault.jpg`} alt="" />
                                </a>
                            </div>
                            {/* <div className="footer">
                                <h3>{video2.title}</h3>
                            </div> */}
                        </div>
                        ))}
                </div>
            </div>

            <div className="videos-box col-12">
                <a target="_blank" href={`https://www.youtube.com/channel/${currentChannelId3}`}>
                    <h1>{channelName3}</h1>
                </a>
                <div className="channel col-12">
                    {videos3.slice(0,4).map ((video3, index) => 
                        (
                        <div key={video3.guid} className="videos-items col-3">
                            <div className="video_image">
                                <a href={video3.link} target="_blank">
                                <img  src={`https://i4.ytimg.com/vi/${video3.guid.split(':')[2]}/mqdefault.jpg`} alt="" />
                                </a>
                            </div>
                            {/* <div className="footer">
                                <h3>{video3.title}</h3>
                            </div> */}
                        </div>
                        ))}
                </div>
            </div>

        </RecomendadosContainer>
     );
}
 
export default Recomendados;

const RecomendadosContainer = styled.div`
    
        height: auto;
        color: ${props => props.theme.fontPrim};
        background-color: ${props => props.theme.fourth};
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 35px;
        margin-top: 9vh;
        width: 90%;
        @media (max-width: 1200px) {
            width: 95%;
            padding: 20px;
            /* margin-top: 1vh;
            padding-bottom: 8vh; */
        }
    
        .videos-box {
            display: flex;
            flex-direction: column;
            height: 27vh;
            justify-content: center;
            align-items: flex-start;

            a {
                display: flex;
                text-decoration: none;
                height: 100%;
                width: fit-content;
                justify-content: center;
                align-items: center;
                h1 {
                    width: 100%;
                    color: ${props => props.theme.fontPrim};
                    font-size: 25px;
                    margin: 0;
                    &:hover {
                        color: ${props => props.theme.hover};
                    }
                }
            }

            .channel {
                display: flex;
                height: 80%;
                flex-direction: row;
                align-items: center;
                gap: 5px;
                @media (max-width: 1200px) {
                justify-content: center;
                align-items: center;
            }

            }
            .videos-items {
                height: 100%;
                gap: 10px;
                padding: 10px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                @media (max-width: 1200px) {
                    justify-content: center;
                    padding: 0;
                }
                    &:hover {
                        box-shadow: -2px 0px 20px 3px rgba(0,0,0,0.09);
                    }

                .video_image {
                    height: 100%;
                    width: 100%;

                    img {
                        width: 90%;
                        height: 100%;
                        object-fit: cover;
                        object-position: 50% 50%;

                        &:hover {
                            filter: contrast(30%);
                        }
                    }
                }
                .footer {
                    h3 {
                    width: 80%;
                    margin: 0;
                    font-size: 20px;
                    color: ${props => props.theme.fontPrim};
                    @media (max-width: 1200px) {
                        display: none;
                    }
                    }
                }
            }
        }
    
`