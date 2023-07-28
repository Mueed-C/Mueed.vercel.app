import React from 'react'
import Section from '@/components/parts/Section'
import Card from '@/components/parts/Card'
const Alumni = () => {
  return (
    <div id="blog_alumni" >
    <Section title="Welcome, WMC Alumni!" mbot='4' isF>
      <p className=' mt-7'>Over here I will share and discuss various resources that may be useful for you all. A lot of what I will share here is what I&#39;ve often been asked about by my classfellows, seniors, and juniors during my 5 years here in Pakistan, so I know it will prove useful to some of you :).
      </p>
      <div id="tag_filters"  >
        {/* Display all tags as options here:
           I think, use a badge icon?*/}
        {/* copied over from blog_research, but im
        not sure what tags would be used here yet.. */}

      </div>    
    </Section>

    <Section>
        <section className="grid gap-4 sm:grid-cols-2">
  <Card
    imageUrl="https://t3.ftcdn.net/jpg/05/65/73/56/360_F_565735615_D2uX6alZuUOu77bJkfh5JKJbKmyZmxNu.jpg"
    heading="Card 1"
    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laudantium placeat sunt hic voluptatem reprehenderit? Labore commodi officia sit veritatis minus deleniti non consequatur earum magni, distinctio illo tempora nobis!Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    link="/"
  />
  <Card
    imageUrl="https://t3.ftcdn.net/jpg/05/65/73/56/360_F_565735615_D2uX6alZuUOu77bJkfh5JKJbKmyZmxNu.jpg"
    heading="Card 2"
    description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  />
  {/* Add more Card components as needed */}
  <Card
    imageUrl="https://t3.ftcdn.net/jpg/05/65/73/56/360_F_565735615_D2uX6alZuUOu77bJkfh5JKJbKmyZmxNu.jpg"
    heading="Card 3"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  />
  <Card
    imageUrl="https://t3.ftcdn.net/jpg/05/65/73/56/360_F_565735615_D2uX6alZuUOu77bJkfh5JKJbKmyZmxNu.jpg"
    heading="Card 4"
    description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  />
  <Card
    imageUrl="https://t3.ftcdn.net/jpg/05/65/73/56/360_F_565735615_D2uX6alZuUOu77bJkfh5JKJbKmyZmxNu.jpg"
    heading="Card 5"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  />
  <Card
    imageUrl="https://t3.ftcdn.net/jpg/05/65/73/56/360_F_565735615_D2uX6alZuUOu77bJkfh5JKJbKmyZmxNu.jpg"
    heading="Card 6"
    description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  />
  <Card
    imageUrl="https://t3.ftcdn.net/jpg/05/65/73/56/360_F_565735615_D2uX6alZuUOu77bJkfh5JKJbKmyZmxNu.jpg"
    heading="Card 7"
    description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  />
</section>

        </Section>
</div>
  )
}

export default Alumni