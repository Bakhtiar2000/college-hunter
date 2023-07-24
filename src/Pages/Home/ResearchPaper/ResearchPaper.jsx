import React, { useState } from 'react';
import research_1 from '../../../../public/assets/research/research_1.webp'
import research_2 from '../../../../public/assets/research/research_2.webp'
import research_3 from '../../../../public/assets/research/research_3.webp'

const ResearchPaper = () => {

    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-3xl md:text-5xl text-center  mt-20 mb-8 font-serif w-fit mx-auto customer-review-heading'>Top Research Papers</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 '>

                <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={research_1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Democracy in Transition: An Analysis of Political Science Studies on the Evolution of Governance Structures</h2>
                        <p>This research paper delves into the realm of Political Science Studies, focusing on the dynamic landscape of democratic governance structures and their evolution over time. The paper adopts an interdisciplinary approach, drawing from political theories, historical analyses, and comparative politics to comprehensively understand the mechanisms behind the transformation of political systems</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Open article</button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={research_2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Artificial Intelligence Advancements: Unleashing the Power of Machine Learning and Deep Neural Networks</h2>
                        <p>This research paper explores the rapidly expanding field of Artificial Intelligence (AI) and delves into the transformative impact of machine learning and deep neural networks on various domains. By investigating the latest advancements in AI technologies, the paper aims to uncover the potential applications, ethical considerations, and future prospects of AI-driven solutions.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Open article</button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={research_3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Clean Energy Technologies: A Comprehensive Assessment of Renewable Solutions for a Sustainable Future</h2>
                        <p>This research paper presents a comprehensive analysis of Clean Energy Technologies, with a primary focus on renewable energy solutions. With the global imperative to combat climate change and transition towards a sustainable future, the paper investigates the potential, challenges, and socio-economic impacts of clean energy technologies in addressing the world's energy needs.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Open article</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ResearchPaper;