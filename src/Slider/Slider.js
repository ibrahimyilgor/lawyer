import React from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import { Typography, Divider, Chip } from "@mui/material";
import querencia from '../Photos/querencia.png'; // with import
 import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(
    {
      divider: {
        '&.MuiDivider-root': {
          '&::before': {
              position: "static",
              borderTop: `2px solid black`,
              height: "100%",
              marginTop: "-1%"
          } ,
          '&::after': {
            position: "static",
            borderTop: `2px solid black`,
            height: "100%",
            marginTop: "-1%"
          } 
        }
      },
    }
  );
 
export default function Slider({slideIndex,setSlideIndex}) {
    const classes = useStyles();

    const text = [
        {title:"Hakkımızda",explanation:"Bizler; doğal hukuk anlayışı çerçevesinde hukuk eğitiminin, günümüz ihtiyaç ve koşullarına göre hayat boyu devam edeceği düşünüldüğünde mesleğinin henüz başında iki genç avukatız. Hukuk fakültesi lisans eğitimini 2016-2020 yılları arasında Sakarya Üniversitesi’nde aynı sıralarda birlikte tamamladık. Sonrasında avukatlık yasal stajımızı, daha etkin ve donanımlı geçirebilmek adına eğitim faaliyetleriyle ön plana çıkan Ankara Barosu’nda gerçekleştirme kararı aldık ve bu doğrultuda hukukun farklı alanlarına dair etkinliklere katılarak verimli bir staj dönemini geride bıraktık. Avukatlık hayatımıza ise kollektif çalışmanın bireysel çalışmaya oranla daha özenli olacağı inancıyla Balay | Dirim Hukuk ve Danışmanlık Bürosu’nu 2022 yılının Ocak ayı itibariyle faaliyete hazır hale getirerek başladık."},
        {title:"Vizyonumuz",explanation:"Balay | Dirim Hukuk ve Danışmanlık Bürosu olarak müvekkillerimizin karşılaştıkları hukuki uyuşmazlıklar karşısında çabuk ve etkin çözümler üretmek suretiyle onlara yardımcı olmak, benimsediğimiz ilk prensiptir. Söz konusu ihtilafları çözüme kavuştururken önceliğimiz meslek etik kuralları çerçevesinde hareket etmek olup bu doğrultuda hukuki temsil görevini üstlenen biz avukatların, (üzerimize yapışan yalancı damgasına karşın) neden iyi ki var olduğuna örnek olabilmek için çabalamaktır. Faaliyet gösterdiğimiz alanlara ilişkin hukuki uyuşmazlıklar üzerinde yetkili mercilerce ilgili hukuk kurallarının doğru şekilde uygulanmasını sağlamayı ve müvekkillerimizin haklarını yüksek düzeyde korumayı hedeflemekteyiz. Siz değerli müvekkillerimize karşı hesap verilebilirlik ilkesini gereği gibi ve en hızlı şekilde uygulayabilmek adına dosyalarımızı dijital ortamda her an paylaşıma hazır şekilde tutmaktayız."}
      ]

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length-1){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length-1){
            setSlideIndex(0)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 0){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 0){
            setSlideIndex(dataSlider.length-1)
        }
    }

    const moveDot = index => {
        setSlideIndex(index);
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index ? "slide active-anim" : "slide"}
                    >   
                        <div style={{height: "90%",  alignItems:"center", justifyContent: "center", display:"flex", flexDirection: "column", fontFamily: "inherit"}}>
                            <Typography fontSize={30} sx={{marginTop: "10px", height: "10%",alignItems: "center", justifyContent: "center", display:"flex", fontFamily: "inherit"}}>{ text[slideIndex].title}</Typography>
                            <Typography fontSize={20} sx={{overflowY: "scroll", height: "65%", display:"flex", fontFamily: 'Kalam'}}>{ text[slideIndex].explanation}</Typography>
                            <Divider className={classes.divider} style={{height: "5%", marginTop: "1%",width:'100%', color: "red", fontFamily: 'Lobster Two'}}>Querencia</Divider>
                            <Divider className={classes.divider} style={{height: "5%", margin: "1%",width:'100%',color: "red", fontFamily: 'Lobster'}}>"Kendinizi en güvende hissetttiğiniz yer"</Divider>
                            {/* <Typography sx={{marginTop: "1%", height: "5%", color: "red", fontFamily: 'Lobster Two'}} >Querencia</Typography>
                            <Typography sx={{marginTop: "1%", height: "5%", color: "red", fontFamily: 'Lobster'}} >"Kendinizi en güvende hissetttiğiniz yer"</Typography> */}
                        </div>
                    </div>
                )
            })}
           {/*  <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/> */}

            <div className="container-dots">
                {Array.from({length: 2}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index)}
                    className={slideIndex === index ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}