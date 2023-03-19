interface Work {
  title: string
  description: string
  image: string
}

const Works: Work[] = [
  {
    title: 'Musiclue',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum libero temporibus eum velit facilis distinctio officiis enim corrupti nobis iste. Similique minus fugiat excepturi laborum et voluptatibus quas quis beatae?',
    image: require('../assets/portofolio_1.png'),
  },

  {
    title: 'Movielia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum libero temporibus eum velit facilis distinctio officiis enim corrupti nobis iste. Similique minus fugiat excepturi laborum et voluptatibus quas quis beatae?',
    image: require('../assets/portofolio_2.png'),
  },

  {
    title: 'Rokerjob',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum libero temporibus eum velit facilis distinctio officiis enim corrupti nobis iste. Similique minus fugiat excepturi laborum et voluptatibus quas quis beatae?',
    image: require('../assets/portofolio_3.png'),
  },

  {
    title: 'Book Searcher',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum libero temporibus eum velit facilis distinctio officiis enim corrupti nobis iste. Similique minus fugiat excepturi laborum et voluptatibus quas quis beatae?',
    image: require('../assets/portofolio_4.png'),
  },

  {
    title: 'Otakufigure',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum libero temporibus eum velit facilis distinctio officiis enim corrupti nobis iste. Similique minus fugiat excepturi laborum et voluptatibus quas quis beatae?',
    image: require('../assets/portofolio_5.png'),
  },

  {
    title: 'Raiburari',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum libero temporibus eum velit facilis distinctio officiis enim corrupti nobis iste. Similique minus fugiat excepturi laborum et voluptatibus quas quis beatae?',
    image: require('../assets/portofolio_6.png'),
  },
]

export const MyWorks = () => {
  return (
    <div
      className="
            grid 
            grid-cols-2
            gap-3.5
            mobile:flex
            mobile:snap-x
            mobile:snap-mandatory
            mobile:overflow-auto
        "
    >
      {Works.map((work, i) => (
        <div
          className="
                    snap-center
                    min-w-[200px]
                    flex
                    p-0.5
                    flex-col
                    gap-3.5
                    rounded-md
                    bg-[var(--secondary)]
                    text-[var(--secondary-text)]
                "
          key={i}
        >
          {/* img */}
          <img
            className="min-h-[200px] max-h-[200px] object-cover"
            alt={work.image}
            src={work.image}
          ></img>

          {/* title, desc & action */}
          <div className="flex-1 flex flex-col gap-3.5 p-3">
            <p className="font-semibold">{work.title}</p>

            <div className="flex items-start mobile:flex-col gap-3.5">
              <p className="text-sm line-clamp-5">{work.description}</p>
              <button
                className="
                    mt-auto
                    rounded-md
                    px-3
                    py-1.5
                    text-sm
                    border
                    border-[var(--primary)]
                    text-[var(--primary)]
                    hover:bg-[var(--primary)]
                    hover:text-[var(--primary-text)]
                "
              >
                Demo
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
