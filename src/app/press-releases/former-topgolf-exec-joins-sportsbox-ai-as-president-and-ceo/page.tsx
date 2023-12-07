import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="bg-white mt-[130px] text-black lg:px-[300px]">
      <div className={`${anton.className} pt-10 text-6xl`}>
        SPORTSBOX AI NAMES FORMER TOPGOLF EXECUTIVE AND LPGA PLAYER JEEHAE LEE
        AS PRESIDENT AND CEO
      </div>

      <div className={`${anton.className} py-10`}>Nov 2</div>

      <div className="[&>*]:py-5 [&>*]:leading-relaxed tracking-normal text-lg">
        <div>
          BELLEVUE, WA, November 2, 2020 -- SPORTSBOX AI announced today that
          Jeehae Lee, a golf industry executive who has worked to create and
          build transformational sports technology businesses, has joined as the
          company’s President and CEO.
        </div>
        <div>
          Ms. Lee’s appointment follows her five-year tenure at Topgolf, where
          she was Head of Growth Initiatives for Toptracer and Business
          Development. She brings her distinct expertise in leading strategy and
          new business development for newly acquired divisions within Topgolf,
          where she built new businesses, launched new products, operating
          programs and initiatives.
        </div>
        <div>
          Ms. Lee launched several products including Topgolf CRUSH, Swing Suite
          GO and Trailer, which are collectively known as Topgolf LIVE,
          leveraging the company’s technology and brand to establish Topgolf
          experiences and bring it to iconic venues and cultural events. She is
          excited to bring her expertise to SPORTSBOX AI’s mission of
          transforming the way athletes learn and improve in sports and fitness
          activities and ushering in 3D motion analysis technology to the masses
          through a single mobile phone.
        </div>
        <div>
          “Our mission to help people achieve their goals in sports and fitness,
          and we believe 3D motion and biomechanical analysis is the best
          approach for that,” said Ms. Lee, a former LPGA professional with a BA
          in Economics from Yale University and an MBA from The Wharton School
          at University of Pennsylvania. “Right now it’s only available through
          expensive systems that are limited to the confines of studio
          facilities. We are going to make that technology available and put it
          right into people’s hands at a fraction of the price.”
        </div>
        <div>
          Ms. Lee rounds out the Executive Team at Sportsbox AI, joining Sam
          Menaker, the Chief Technology Officer, and longtime friend and former
          Yale Women’s Golf teammate, Stephanie Wei, the Chief Marketing
          Officer, as the company’s founders.
        </div>
        <div>
          Ms. Wei, a former sports broadcaster and golf journalist who
          specializes in digital and social media branding and marketing, will
          lead Sportsbox AI’s marketing efforts.
        </div>
        <div>
          While covering hundreds of PGA Tour and LPGA events around the world,
          Ms. Wei, who has a BA in History from Yale University, was a
          contributor for Sports Illustrated Golf+ and correspondent for Fox
          Sports International Channels and Wall Street Journal, while
          maintaining her popular independent website, Wei Under Par. She is
          known for her pioneering efforts with new media in the golf industry
          in the early 2010s and looks forward to helping disrupt the way people
          learn, teach and train across multiple sports.
        </div>
        <div>
          Meanwhile, Mr. Menaker was the former SVP of Engineering at Voicebox
          Technologies, where he led teams in building solutions and products
          using AI and Machine Learning, which were shipped in hundreds of
          millions of mobile phones, consumer electronic products and cars in
          over 20 languages.
        </div>
        <div>
          Mr. Menaker, who was also a Senior Director at Nuance Communications
          and Software Architect at Amazon, brings his vast experience
          delivering global technology production platforms for companies such
          as Samsung, Toyota, Chrysler and BestBuy.
        </div>
        <div>
          “I’m very excited to bring new Machine Learning, AI and Action
          Understanding technologies to the marketplace and deliver new and
          innovative performance enhancing sports applications to the customers”
          said Mr. Menaker.
        </div>
        <div>###</div>
        <div>About AITHINKTANK LLC</div>
        <div>
          AITHINKTANK LLC (AI Thinktank) is a software technology incubator
          developing state-of-the-art artificial intelligence platforms to
          accelerate and simplify the development of AI applications. The team
          is composed of seasoned professionals with decades of experience in
          delivering professional quality software, including 15 years in
          artificial intelligence.
        </div>
        <div>
          AI Thinktank works with entrepreneurs to incubate companies that will
          incorporate these AI models and algorithms into innovative and
          transformative applications for both the consumer and the enterprise.
          The founders will also provide these companies with access to
          experienced hardware and software architects, as well as AI scientists
          who are leaders in their field.
        </div>
        <div>About Sportsbox.ai, Inc.</div>
        <div>
          Founded in 2020, Sportsbox.ai, Inc. is an AI-powered technology
          company that develops AI Coach mobile applications in sports and
          fitness using patent-pending 3D Motion Capture and Kinematic AI
          technology. Through our unique technology that can capture, measure
          and analyze complex athletic motions in 3D, combined with the
          knowledge and experience of the world’s leading instructors in each
          sport, Sportsbox AI brings real-time corrective feedback to help
          athletes achieve their goals in sports and fitness.
        </div>
        <div>***</div>
        <div>Media Contact:</div>
        <div>Stephanie Wei</div>
        <div>VP of Comms & Co-Founder</div>
        <div>stephaniew@sportsbox.ai</div>
        <div>+1 917.617.7183</div>
      </div>
    </div>
  );
}
