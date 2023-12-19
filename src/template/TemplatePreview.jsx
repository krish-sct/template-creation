import React from 'react'

const TemplatePreview = ({ templateData }) => {
    return (
        <div className='preview-wrapper'>
            <h4>Template Preview</h4>
            <div>
                {templateData?.map((e, i) => {
                    return (
                        <div key={i} >
                            {e.key === 'header' ? <div>
                                <h2 className='header'>{e.value}</h2>
                            </div> : ""}
                            {e.key === 'title' ? <div>
                                <h3 className='title'>{e.value}</h3>
                            </div> : ""}
                            {e.key === 'subTitle' ? <div>
                                <b className='subTitle'>{e.value}</b>
                            </div> : ""}
                            {e.key === 'description' ? <div className='description'>{e.value}</div> : ""}
                            {e.key === 'images' ?
                                <div className='images'>
                                    {/* <ImageListItem> */}
                                    <img
                                        srcSet={e.value}
                                        src={e.value}
                                        alt={e.value}
                                        loading="lazy"
                                    />
                                    {/* </ImageListItem>  */}
                                </div>
                                : ""}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TemplatePreview