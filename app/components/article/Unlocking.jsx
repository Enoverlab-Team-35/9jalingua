import React from 'react'

const text = [
    {
        title: `Unlocking Cultural Insights`,
        description: `The journey of learning Nigerian languages goes far beyond mastering vocabulary and pronunciation. It becomes a portal to understanding the intricate tapestry of Nigerian culture. From traditional proverbs to colloquial expressions, language becomes the key to unraveling the values, beliefs, and customs that shape the Nigerian way of life.`
    },
    {
        title: `Fostering Connection and Unity`,
        description: `Languages are not just tools for communication; they are bridges that connect people. As users embark on the adventure of language learning, they discover the power of fostering connections, both within the Nigerian community and beyond. The article explores how shared linguistic experiences contribute to a sense of unity, breaking down barriers and building stronger bonds.`
    },
    {
        title: `Preserving Heritage and Identity`,
        description: `In a world where cultural diversity is both celebrated and threatened, the article emphasizes the role of learning Nigerian languages in preserving heritage and identity. It examines how language serves as a vessel for passing down traditions, stories, and values from one generation to the next, ensuring that the rich tapestry of Nigerian heritage remains intact.`
    },
    {
        title: `Empowering Individuals for a Global Society`,
        description: `Beyond cultural and community benefits, the article explores the transformative impact of language learning on individual growth. From enhanced cognitive abilities to increased intercultural competence, it discusses how proficiency in Nigerian languages empowers individuals to navigate a globalized world with confidence and understanding.`
    },
    {
        title: `Navigating the Article`,
        description: `Readers can expect a comprehensive exploration of the transformative journey that begins with learning Nigerian languages. The article is structured to provide a holistic understanding, with sections dedicated to cultural insights, community connection, heritage preservation, and the individual empowerment that unfolds through language acquisition.`
    },
]

export default function Unlocking() {
    return (
        <section className='my-20 sm:mt-24 mb-28 px-5 font-arimo'>
            <div className='mx-auto max-w-[817px] w-full grid gap-12'>
                {text?.map((item, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={(index * 100) + 100}
                    >
                        <h4 className='text-grays-1000 text-2xl font-bold'>{item.title}</h4>
                        <p className='mt-6 leading-relaxed text-xl font-normal text-grays-800'>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
