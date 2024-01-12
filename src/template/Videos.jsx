import React from "react";

const Videos = ({ data }) => {
    const handleURL = () => {
        let url = (data?.url)?.split('/')

        return 'https://www.youtube.com/embed/' + url?.[url?.length - 1] || ''
    }
    return (

        <div className="flex-item">
            {/* <div><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/ZfIlAVucjrQ?showinfo=0"></iframe><p><br></p></div> */}
            <div>
                <iframe
                    className=""
                    allowFullScreen={true} src={handleURL()}
                ></iframe>
                <br />
                <div className="description">{data?.title}</div>
            </div>
        </div>
    );
};

export default Videos;
