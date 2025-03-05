"use client";
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Video from '../components/VideoSection';
import Content1 from '../components/content1';
import Content2 from '../components/content2';
import Content3 from '../components/content3';
import Content4 from '../components/content4';
import Frame from '../components/Frame';
import Work from '../components/work';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <Video />
    <Content1
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03}
      >  </Content1>
    <Content2
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
      >  </Content2>
    <Frame />
    <Content3
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03}
      >  </Content3>
      <div className="relative w-full">
        <Work />
      </div>
      <div className="mt-[300vh]">
        <Content4 />
      </div>
      <Footer />

    </>
  );
}