import React, {useEffect} from "react";
import useWindowSize from "../useWindowSize";
import './Pdf.css';
import {useState} from 'react'
import { Avatar, Box, Button, Grid, List, ListItem, ListItemAvatar, ListItemText, Modal, Typography } from "@mui/material";
import useWindowDimensions from '../getDimensions';

const areas = [
    {name: "Aİle Hukuku", detail: ["Boşanma", "Velayet Davaları", "Nafaka Talepleri", "Tanıma-Tenfiz İşlemleri", "Mal Rejimi Ayrılığı","..."]},
    {name: "Ceza Hukuku", detail: ["Taksirle Yaralama", "Hakaret", "Malvarlığına İlişkin Suçlar", "Bilişim Suçları","..."]},
    {name: "İcra İflas Hukuku", detail: ["İcra Takibi", "Tahliye", "..."]},
    {name: "İdare Hukuku", detail: ["İdareye Başvuru", "İptal ve Tam Yargı Davaları"]},
    {name: "İnsan Hakları Hukuku", detail: ["Anayasa Mahkemesi ve Avrupa İnsan Hakları Mahkemesi Başvuruları"]},
    {name: "İş Hukuku", detail: ["İşçilik Alacakları", "İş Kazasından Doğan Tazminat Davası", "İşe İade", "..."]},
    {name: "Kİra Hukuku", detail: ["Kira Alacakları", "Kiralananın Tahliyesi", "Kira Bedelinin Tespiti","..."]},
    {name: "Kİşİsel Verİlerİn Korunması Hukuku", detail: ["Aydınlatma Metinleri", "Açık Rıza", "Verbis Kayıt","..."]},
    {name: "Mİras Hukuku", detail: ["Tenkis Davası", "Denkleştirme Talebi", "Vasiyetname Hazırlanması", "Vasiyetname İptali", "Veraset İlamının Alınması", "Muris Muvazaasına Yönelik Tapu İptal Tescil Davası","..."]},
    {name: "Sağlık Hukuku", detail: ["Malpraktis Davaları","..."]},
    {name: "Sİgorta Hukuku", detail: ["Araç Değer Kaybı", "Geçici ve Sürekli İş Göremezlik Tazminatı", "Sigorta Tahkim Başvuruları","..."]},
    {name: "Sözleşmeler Hukuku", detail: ["Frenchise Sözleşmeleri", "Arsa Payı Karşılığı İnşaat Sözleşmeleri", "Kira Sözleşmeleri", "İş sözleşmeleri", "Alım-Satım Sözleşmeleri","..."]},
    {name: "Taşınmaz Hukuku", detail: ["Ortaklığın Giderilmesi", "Arsa Payı Karşılığı İnşaat Sözleşmelerinden Doğan Uyuşmazlıklar", "Kamulaştırma Davaları", "El Atmanın Önlenmesi", "Haksız İşgal Tazminatı (Ecr-i Misil)","..."]},
    {name: "Tazmİnat Hukuku", detail: ["Maddi Tazminat", "Manevi Tazminat", "Destekten Yoksun Kalma Tazminatı", "İtibar Tazminatı","..."]},
    {name: "Tüketİcİ Hukuku", detail: ["Tüketici Hakem Heyeti ve Tüketici Mahkemesi Başvuruları","..."]},
    {name: "Vergİ Hukuku", detail: ["Gelir Vergisi", "Katma Değer Vergisi", "Kurumlar Vergisi", "Motorlu Taşıtlar Vergisi", "Emlak Vergisi vd. Tüm Vergi Türlerine İlişkin İhtilaflar"]},
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

const WorkingAreas = () => {
  const dim = useWindowDimensions();
  const [open, setOpen] = useState(false);

  const [index, setIndex] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const buttonClick = (idx) => {
      handleOpen();
      setIndex(idx)
  }

  /*useEffect(() => {
    console.log("windowSize",windowSize);
 }, [windowSize]);*/

  return (
    <><Grid container justifyContent="flex-end">
          {areas.map((item,index) => {
              return (
                  <Grid xs={3} item sx={{ height: "20.5vh", width: "25vw", textAlign: "center", justifyContent: "center", display: "flex" }}>
                      <Button onClick={() => buttonClick(index)} sx={{ fontSize: dim?.height > dim?.width ? "3vw" : "2vh", fontFamily: 'Kalam', height: "90%", width: "90%", textAlign: "center", justifyContent: "center", display: "flex", backgroundColor: "#A9A9A9", color: "black" }}>
                          {item.name}
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
              <Box sx={dim?.height > dim?.width ? stylePhone : style}>
                  {areas[index]?.detail.map((item,index2) => {
                      return(
                        <Typography align="center" sx={{width: "100%", fontFamily: 'Kalam', height: `${(35/areas[index]?.detail.length)}vh`,  justifyContent: "center",alignItems: "center", display: "grid"}} id="modal-modal-title" variant="body2">
                            {areas[index]?.detail[index2]}
                        </Typography>
                      )
                  })}
              </Box>
          </Modal></>
  );
}

export default WorkingAreas;