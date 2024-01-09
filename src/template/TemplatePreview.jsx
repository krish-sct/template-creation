import React from 'react'
import HTMLPreview from './HTMLPreview'

const TemplatePreview = ({ templateData }) => {
    const handleDate = (value) => {
        let date = new Date(value)
        return (date.toLocaleDateString()) || value;
    }
    return (
        <div className='preview-wrapper'>
            <h4>Template Preview</h4>
            <div>
                {templateData?.map((e, i) => {
                    return (
                        <div key={i}>
                            {e?.key === 'header' ? <div>
                                <h2 className='header'>{e?.value}</h2>
                            </div> : ""}
                            {e?.key === 'title' ? <div>
                                <h3 className='title'>{e?.value}</h3>
                            </div> : ""}
                            {e?.key === 'subTitle' ? <div>
                                <b className='subTitle'>{e?.value}</b>
                            </div> : ""}
                            {e?.key === 'description' ? <div className='description'>{e?.value}</div> : ""}
                            {e?.key === 'images' ?
                                <div className='images'>
                                    {e?.imgs?.map((img, imgI) => {
                                        return <img className='images-img' src={img?.src} alt={img?.alt} key={imgI} loading="lazy" />
                                    })}
                                </div>
                                : ""}
                            {e?.key === 'list' ?
                                <div className='lists'>
                                    <ul>
                                        {e?.lists?.map((list, listI) => {
                                            return <li className='list' key={listI}>{list?.value}</li>
                                        })}
                                    </ul>
                                </div> : ""}
                            {e?.key === 'banner' ? <div class="banner">
                                <img src="https://picsum.photos/800/300" alt="Nature Banner" />
                                <h1>Welcome to our Website</h1>
                                <p>Discover amazing things here!</p>
                                <button>Explore Now</button>
                            </div> : ''}
                            {e?.key === 'date' ? <div>
                                <div className='date'>{handleDate(e?.value)}</div>
                            </div> : ""}
                            {e?.key === 'htmlEditor' ? <div className='htmlEditor'>
                                <HTMLPreview data={e?.value} />
                            </div> : ''}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TemplatePreview