import React, { useEffect } from "react";
import './WorkingAreas.css';
import {useState} from 'react'
import {Box, Button, Grid, Modal, Typography } from "@mui/material";
import useWindowDimensions from '../getDimensions';
import { makeStyles } from '@mui/styles';

import Prev from "../Photos/previous.png"

import Aile from "../WorkingAreasLogos/aile.png"
import Ceza from "../WorkingAreasLogos/ceza.png"
import İcra from "../WorkingAreasLogos/icra.png"
import İdare from "../WorkingAreasLogos/idare.png"
import İnsan from "../WorkingAreasLogos/insan.png"
import İş from "../WorkingAreasLogos/iş.png"
import Kira from "../WorkingAreasLogos/kira.png"
import Kişisel from "../WorkingAreasLogos/kişisel.png"
import Miras from "../WorkingAreasLogos/miras.png"
import Sağlık from "../WorkingAreasLogos/sağlık.png"
import Sigorta from "../WorkingAreasLogos/sigorta.png"
import Sözleşme from "../WorkingAreasLogos/sözleşme.png"
import Taşınmaz from "../WorkingAreasLogos/taşınmaz.png"
import Tazminat from "../WorkingAreasLogos/tazminat.png"
import Tüketici from "../WorkingAreasLogos/tüketici.png"
import Vergi from "../WorkingAreasLogos/vergi.png"

const useStyles = makeStyles(
    {
      button: {
        "& .MuiButton-root:hover": {
          backgroundColor: "white"
        }
      },
    }
  );

const areas = [
    {logo: <img id="waLogo" alt="ceza" src={Aile} style={{height:"70%",width:"auto"}}/>,name: "Aİle Hukuku", detail: ["Boşanma", "Velayet Davaları", "Nafaka Talepleri", "Tanıma-Tenfiz İşlemleri", "Mal Rejimi Ayrılığı","..."], detailInfo: ["BoşanmaDetay", "Velayet Davaları", "Nafaka Talepleri", "Tanıma-Tenfiz İşlemleri", "Mal Rejimi Ayrılığı","..."]},
    {logo: <img id="waLogo" alt="aile" src={Ceza} style={{height:"70%",width:"auto"}}/>, name: "Ceza Hukuku", detail: ["Taksirle Yaralama", "Hakaret", "Malvarlığına İlişkin Suçlar", "Bilişim Suçları","..."], detailInfo: ["Taksirle Yaralama", "Hakaret", "Malvarlığına İlişkin Suçlar", "Bilişim Suçları","..."]},
    {logo: <img id="waLogo" alt="icra" src={İcra} style={{height:"70%",width:"auto"}}/>, name: "İcra İflas Hukuku", detail: ["İcra Takibi", "Tahliye", "..."], detailInfo: ["İcra Takibi", "Tahliye", "..."]},
    {logo: <img id="waLogo" alt="idare" src={İdare} style={{height:"70%",width:"auto"}}/>, name: "İdare Hukuku", detail: ["İdareye Başvuru", "İptal ve Tam Yargı Davaları"], detailInfo: ["İdareye Başvuru", "İptal ve Tam Yargı Davaları"]},
    {logo: <img id="waLogo" alt="insan" src={İnsan} style={{height:"70%",width:"auto"}}/>, name: "İnsan Hakları Hukuku", detail: ["Anayasa Mahkemesi ve Avrupa İnsan Hakları Mahkemesi Başvuruları"], detailInfo: ["Anayasa Mahkemesi ve Avrupa İnsan Hakları Mahkemesi Başvuruları"]},
    {logo: <img id="waLogo" alt="iş" src={İş} style={{height:"70%",width:"auto"}}/>, name: "İş Hukuku", detail: ["İşçilik Alacakları", "İş Kazasından Doğan Tazminat Davası", "İşe İade", "..."], detailInfo: ["İşçilik Alacakları", "İş Kazasından Doğan Tazminat Davası", "İşe İade", "..."]},
    {logo: <img id="waLogo" alt="kira" src={Kira} style={{height:"70%",width:"auto"}}/>, name: "Kİra Hukuku", detail: ["Kira Alacakları", "Kiralananın Tahliyesi", "Kira Bedelinin Tespiti","..."], detailInfo: ["Kira Alacakları", "Kiralananın Tahliyesi", "Kira Bedelinin Tespiti","..."]},
    {logo: <img id="waLogo" alt="kişisel" src={Kişisel} style={{height:"70%",width:"auto"}}/>, name: "Kİşİsel Verİlerİn Korunması Hukuku", detail: ["Aydınlatma Metinleri", "Açık Rıza", "Verbis Kayıt","..."], detailInfo: ["Aydınlatma Metinleri", "Açık Rıza", "Verbis Kayıt","..."]},
    {logo: <img id="waLogo" alt="miras" src={Miras} style={{height:"70%",width:"auto"}}/>, name: "Mİras Hukuku", detail: ["Tenkis Davası", "Denkleştirme Talebi", "Vasiyetname Hazırlanması", "Vasiyetname İptali", "Veraset İlamının Alınması", "Muris Muvazaasına Yönelik Tapu İptal Tescil Davası","..."],  detailInfo: ["Tenkis Davası", "Denkleştirme Talebi", "Vasiyetname Hazırlanması", "Vasiyetname İptali", "Veraset İlamının Alınması", "Muris Muvazaasına Yönelik Tapu İptal Tescil Davası","..."]},
    {logo: <img id="waLogo" alt="sağlık" src={Sağlık} style={{height:"70%",width:"auto"}}/>, name: "Sağlık Hukuku", detail: ["Malpraktis Davaları","..."], detailInfo: ["Malpraktis Davaları","..."]},
    {logo: <img id="waLogo" alt="sigorta" src={Sigorta} style={{height:"70%",width:"auto"}}/>, name: "Sİgorta Hukuku", detail: ["Araç Değer Kaybı", "Geçici ve Sürekli İş Göremezlik Tazminatı", "Sigorta Tahkim Başvuruları","..."], detailInfo: ["Araç Değer Kaybı", "Geçici ve Sürekli İş Göremezlik Tazminatı", "Sigorta Tahkim Başvuruları","..."]},
    {logo: <img id="waLogo" alt="sözleşme" src={Sözleşme} style={{height:"70%",width:"auto"}}/>, name: "Sözleşmeler Hukuku", detail: ["Frenchise Sözleşmeleri", "Arsa Payı Karşılığı İnşaat Sözleşmeleri", "Kira Sözleşmeleri", "İş sözleşmeleri", "Alım-Satım Sözleşmeleri","..."], detailInfo: ["Frenchise Sözleşmeleri", "Arsa Payı Karşılığı İnşaat Sözleşmeleri", "Kira Sözleşmeleri", "İş sözleşmeleri", "Alım-Satım Sözleşmeleri","..."]},
    {logo: <img id="waLogo" alt="taşınmaz" src={Taşınmaz} style={{height:"70%",width:"auto"}}/>, name: "Taşınmaz Hukuku", detail: ["Ortaklığın Giderilmesi", "Arsa Payı Karşılığı İnşaat Sözleşmelerinden Doğan Uyuşmazlıklar", "Kamulaştırma Davaları", "El Atmanın Önlenmesi", "Haksız İşgal Tazminatı (Ecr-i Misil)","..."], detailInfo: ["Ortaklığın Giderilmesi", "Arsa Payı Karşılığı İnşaat Sözleşmelerinden Doğan Uyuşmazlıklar", "Kamulaştırma Davaları", "El Atmanın Önlenmesi", "Haksız İşgal Tazminatı (Ecr-i Misil)","..."]},
    {logo: <img id="waLogo" alt="tazminat" src={Tazminat} style={{height:"70%",width:"auto"}}/>, name: "Tazmİnat Hukuku", detail: ["Maddi Tazminat", "Manevi Tazminat", "Destekten Yoksun Kalma Tazminatı", "İtibar Tazminatı","..."], detailInfo: ["Maddi Tazminat", "Manevi Tazminat", "Destekten Yoksun Kalma Tazminatı", "İtibar Tazminatı","..."]},
    {logo: <img id="waLogo" alt="tüketici" src={Tüketici} style={{height:"70%",width:"auto"}}/>, name: "Tüketİcİ Hukuku", detail: ["Tüketici Hakem Heyeti ve Tüketici Mahkemesi Başvuruları","..."], detailInfo: ["Tüketici Hakem Heyeti ve Tüketici Mahkemesi Başvuruları","..."]},
    {logo: <img id="waLogo" alt="vergi" src={Vergi} style={{height:"70%",width:"auto"}}/>, name: "Vergİ Hukuku", detail: ["Gelir Vergisi", "Katma Değer Vergisi", "Kurumlar Vergisi", "Motorlu Taşıtlar Vergisi", "Emlak Vergisi vd. Tüm Vergi Türlerine İlişkin İhtilaflar"], detailInfo: ["Gelir Vergisi", "Katma Değer Vergisi", "Kurumlar Vergisi", "Motorlu Taşıtlar Vergisi", "Emlak Vergisi vd. Tüm Vergi Türlerine İlişkin İhtilaflar"]},
]

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "35vw",
    height: "35vh",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };

  const stylePhone = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "75vw",
    height: "35vh",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };

  const styleDetail = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "75vw",
    height: "75vh",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };

  const styleDetailPhone = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "75vw",
    height: "75vh",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };

const WorkingAreas = () => {
  const classes = useStyles();
  const dim = useWindowDimensions();
  const [open, setOpen] = useState(false);

  const [index, setIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedIndex2, setSelectedIndex2] = useState(-1);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false); setSelectedIndex(-1); setSelectedIndex2(-1)};

  const buttonClick = (idx) => {
      handleOpen();
      setIndex(idx)
  }

  useEffect(() => {
    if(open === true){
        setHoverIndex(index);
    }
    else{
        setHoverIndex(-1);
    }
 }, [open]);

/*   useEffect(() => {
    console.log("hoverIndex",hoverIndex);
 }, [hoverIndex]); */

  return (
    <Box sx={{height: "100%"}}><Grid container sx={dim?.height > dim?.width ? {height: "100%"} : {height: "100%"}} justifyContent="flex-end">
          {areas.map((item,index) => {
              return (
                  <Grid xs={3} className="Grid" item sx={{
                        width: "25vw",
                        textAlign: "center",
                        justifyContent: "center",
                        display: "flex" }}>
                      <Button className={classes.button} onMouseEnter={() => setHoverIndex(index)} onMouseLeave={() => {if(open === false){setHoverIndex(-1)} }} onClick={() => buttonClick(index)} sx={{':hover': index === hoverIndex ? {
                            bgcolor: 'white',
                        } : {bgcolor: "#A9A9A9"}, backgroundColor : hoverIndex !== index ? "#A9A9A9" : "white", fontSize: dim?.height > dim?.width ? "3vw" : "2vh", fontFamily: 'Kalam', height: "90%", width: "90%", textAlign: "center", justifyContent: "center", display: "flex", color: "black" }}>
                          {index !== hoverIndex ? item.name : item.logo}
                      </Button>
                  </Grid>
              );
          })}

      </Grid>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
              { selectedIndex2 === -1 ? (<Box sx={dim?.height > dim?.width ? stylePhone : style}>
                  {areas[index]?.detail.map((item,index2) => {
                      return(
                        <Button onClick={() => {setSelectedIndex(index);setSelectedIndex2(index2)}} align="center" sx={{width: "100%", fontFamily: 'Kalam', height: `${(35/areas[index]?.detail.length)}vh`,  justifyContent: "center",alignItems: "center", display: "grid"}} id="modal-modal-title" variant="body2">
                            {areas[index]?.detail[index2]}
                        </Button>
                      )
                  })}
              </Box>) :
              (<Box sx={dim?.height > dim?.width ? styleDetailPhone : styleDetail}>
                <Box sx={{height: "10%", width: "100%", display:"flex", flexDirection: "row", justifyContent: "center", alignItem: "center"}}>
                  <Box sx={{height: "100%", width: "10%", display:"flex", flexDirection: "row", justifyContent: "center", alignItem: "center"}}>
                    {areas[selectedIndex]?.logo}
                  </Box>
                  <Box sx={{height: "100%", width: "80%"}}>
                    <Typography style={{ fontSize: "3vh", fontFamily: 'Kalam', textAlign:"center",  height: "100%", display: "grid", alignItems: "center"}}>{areas[selectedIndex]?.detail[selectedIndex2]}</Typography>
                  </Box>
                  <Box sx={{height: "100%", width: "10%", display:"flex", flexDirection: "row", justifyContent: "center", alignItem: "center"}}>
                  <img onClick={() => setSelectedIndex2(-1)} id="waLogo" alt="ceza" src={Prev} style={{height:"70%",width:"auto", cursor: "pointer"}}/>
                  </Box>
                </Box>
                <Box sx={{height: "90%", width: "100%"}}>
                <Typography style={{ fontSize: "3vh", fontFamily: 'Kalam', textAlign:"center",  height: "100%", display: "grid", alignItems: "center"}}>{areas[selectedIndex]?.detailInfo[selectedIndex2]}</Typography>
                </Box>
            </Box>)
            }
          </Modal>
    </Box>
  );
}

export default WorkingAreas;