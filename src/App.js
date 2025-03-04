import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './App.css';
import Model from "./FCC_final";
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Logo from './assets/logo.png';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'

/*Hola mundo */

let idslist = [false, false, false, false, false, false, false, false, false, false,
   false, false, false, false, false, false, false, false, false, false,
   false, false, false, false, false, false, false, false, false, false,
   false, false, false, false, false, false, false, false, false, false,
   false, false, false, false, false, false, false, false, false, false,
   false, false, false, false, false, false, false, false, false, false,
   false, false, false, false, false, false, false, false, false, false,
   false, false, false, false, false, false, false, false, false, false,
   false, false, false, false, false, false, false, false, false, false,
   false, false, false, false, false, false, false, false, false, false,
   false, false, false, false, false, false, false, false, false, false,
   false, false, false, false, false, false, false, false, false, false,
   false, false, false, false, false, false, false, false, false, false,
   false, false, false, false, false, false, false, false, false, false,
   false, false, false, false, false, false];

function App() {
   document.body.style.backgroundColor = "#00395E";
   document.body.style.backgroundImage = "radial-gradient(#86a9bf, #00395E)";

   const [anchoPantalla, setAnchoPantalla] = useState('245px');
   const [cargando, setCargando] = useState();
   const [radio, setRadio] = useState(1);

   const [modal, setModal] = useState(false);
   const toggle = () => { setModal(!modal); }

   const [estado, setEstado] = useState({ idslist: idslist });

   const [edificios, setEdificios] = useState([]);

   const urlBase = "https://pruebavideoappweb.000webhostapp.com/back-funciones/funciones.php?X=";

   const handleClick = (array) => {
      setEstado({ idslist: array });
   }

   const { collapseSidebar, collapsed } = useProSidebar();

   const colapsar = () => {
      collapseSidebar();
      collapsed ? setAnchoPantalla('245px') : setAnchoPantalla('0px');
   }

   const bajarTablas = async () => {
      setCargando(true);
      await fetch(urlBase + "3")
         .then(res => res.json())
         .then((data) => {
            console.log("Edificios", data)
            setEdificios(data);
         })
         .catch((error) => console.log(error))

      setCargando(false);
   }

   let [acceso9, setAcceso9] = useState();
   let [acceso12, setAcceso12] = useState();

   let [cco1, setCco1] = useState();
   let [sal1, setSal1] = useState();
   let [sal2, setSal2] = useState();
   let [sal3, setSal3] = useState();
   let [sal4, setSal4] = useState();
   let [sal5, setSal5] = useState();
   let [sal6, setSal6] = useState();
   let [cubo1, setCubo1] = useState();
   let [cubo2, setCubo2] = useState();
   let [cubo3, setCubo3] = useState();
   let [cubo4, setCubo4] = useState();
   let [cubo5, setCubo5] = useState();
   let [cubo6, setCubo6] = useState();
   let [cubo7, setCubo7] = useState();
   let [cubo8, setCubo8] = useState();
   let [cubo9, setCubo9] = useState();
   let [cubo10, setCubo10] = useState();
   let [cubo11, setCubo11] = useState();
   let [cubo12, setCubo12] = useState();
   let [cubo13, setCubo13] = useState();
   let [cubo14, setCubo14] = useState();
   let [cubo15, setCubo15] = useState();
   let [cubo16, setCubo16] = useState();
   let [cubo17, setCubo17] = useState();
   let [cubo18, setCubo18] = useState();
   let [cubo19, setCubo19] = useState();
   let [cubo20, setCubo20] = useState();
   let [cubo21, setCubo21] = useState();
   let [cubo22, setCubo22] = useState();
   let [cubo23, setCubo23] = useState();
   let [punto1, setPunto1] = useState();
   let [punto2, setPunto2] = useState();

   let [cco2, setCco2] = useState();
   let [salCco2_1, setSalCco2_1] = useState();
   let [cuboCco2_1, setCuboCco2_1] = useState();
   let [cuboCco2_2, setCuboCco2_2] = useState();
   let [cuboCco2_3, setCuboCco2_3] = useState();
   let [cuboCco2_4, setCuboCco2_4] = useState();
   let [cuboCco2_5, setCuboCco2_5] = useState();
   let [cuboCco2_6, setCuboCco2_6] = useState();
   let [cuboCco2_7, setCuboCco2_7] = useState();
   let [cuboCco2_8, setCuboCco2_8] = useState();
   let [cuboCco2_9, setCuboCco2_9] = useState();
   let [cuboCco2_10, setCuboCco2_10] = useState();
   let [cuboCco2_11, setCuboCco2_11] = useState();
   let [cuboCco2_12, setCuboCco2_12] = useState();
   let [cuboCco2_13, setCuboCco2_13] = useState();
   let [cuboCco2_14, setCuboCco2_14] = useState();
   let [cuboCco2_15, setCuboCco2_15] = useState();
   let [cuboCco2_16, setCuboCco2_16] = useState();
   let [cuboCco2_17, setCuboCco2_17] = useState();
   let [cuboCco2_18, setCuboCco2_18] = useState();
   let [cuboCco2_19, setCuboCco2_19] = useState();
   let [cuboCco2_20, setCuboCco2_20] = useState();
   let [cuboCco2_21, setCuboCco2_21] = useState();
   let [cco2Punto1, setCco2Punto1] = useState();
   let [cco2Punto2, setCco2Punto2] = useState();
   let [cco2Lab1, setCco2Lab1] = useState();
   let [cco2Lab2, setCco2Lab2] = useState();
   let [cco2Lab3, setCco2Lab3] = useState();
   let [cco2Lab4, setCco2Lab4] = useState();
   let [cco2Lab5, setCco2Lab5] = useState();
   let [cco2Lab6, setCco2Lab6] = useState();
   let [cco2Lab7, setCco2Lab7] = useState();
   let [cco2Lab8, setCco2Lab8] = useState();
   let [cco2Lab9, setCco2Lab9] = useState();
   let [cco2Lab10, setCco2Lab10] = useState();
   let [cco2Lab11, setCco2Lab11] = useState();

   let [cco3, setCco3] = useState();
   let [cco3Sal1, setCco3Sal1] = useState();
   let [cco3Sal2, setCco3Sal2] = useState();
   let [cco3Sal3, setCco3Sal3] = useState();
   let [cuboCco3_1, setCuboCco3_1] = useState();
   let [cuboCco3_2, setCuboCco3_2] = useState();
   let [cuboCco3_3, setCuboCco3_3] = useState();
   let [cuboCco3_4, setCuboCco3_4] = useState();
   let [cuboCco3_5, setCuboCco3_5] = useState();
   let [cuboCco3_6, setCuboCco3_6] = useState();
   let [cuboCco3_7, setCuboCco3_7] = useState();
   let [cuboCco3_8, setCuboCco3_8] = useState();
   let [cuboCco3_9, setCuboCco3_9] = useState();
   let [cuboCco3_10, setCuboCco3_10] = useState();
   let [cuboCco3_11, setCuboCco3_11] = useState();
   let [cuboCco3_12, setCuboCco3_12] = useState();
   let [cuboCco3_13, setCuboCco3_13] = useState();
   let [cuboCco3_14, setCuboCco3_14] = useState();
   let [cuboCco3_15, setCuboCco3_15] = useState();
   let [cuboCco3_16, setCuboCco3_16] = useState();
   let [cuboCco3_17, setCuboCco3_17] = useState();
   let [cuboCco3_18, setCuboCco3_18] = useState();
   let [cuboCco3_19, setCuboCco3_19] = useState();
   let [cuboCco3_20, setCuboCco3_20] = useState();
   let [cuboCco3_21, setCuboCco3_21] = useState();
   let [cuboCco3_22, setCuboCco3_22] = useState();
   let [cco3Punto1, setCco3Punto1] = useState();
   let [cco3Lab1, setCco3Lab1] = useState();
   let [cco3Lab2, setCco3Lab2] = useState();
   let [cco3Lab3, setCco3Lab3] = useState();
   let [cco3Lab4, setCco3Lab4] = useState();
   let [cco3Lab5, setCco3Lab5] = useState();
   let [cco3Lab6, setCco3Lab6] = useState();
   let [cco3Lab7, setCco3Lab7] = useState();
   let [cco3Lab8, setCco3Lab8] = useState();
   let [cco3Lab9, setCco3Lab9] = useState();
   let [cco3Lab10, setCco3Lab10] = useState();
   let [cco3Lab11, setCco3Lab11] = useState();
   let [cco3Lab12, setCco3Lab12] = useState();
   let [cco3Lab13, setCco3Lab13] = useState();

   let [cco4, setCco4] = useState();
   let [cco4Sal1, setCco4Sal1] = useState();
   let [cco4Sal2, setCco4Sal2] = useState();
   let [cco4Sal3, setCco4Sal3] = useState();
   let [cco4Sal4, setCco4Sal4] = useState();
   let [cco4Sal5, setCco4Sal5] = useState();
   let [cco4Sal6, setCco4Sal6] = useState();
   let [cco4Sal7, setCco4Sal7] = useState();
   let [cco4Sal8, setCco4Sal8] = useState();
   let [cco4Sal9, setCco4Sal9] = useState();
   let [cco4Sal10, setCco4Sal10] = useState();
   let [cco4Sal11, setCco4Sal11] = useState();
   let [cco4Sal12, setCco4Sal12] = useState();
   let [cco4Sal13, setCco4Sal13] = useState();
   let [cco4Sal14, setCco4Sal14] = useState();
   let [cco4Sal15, setCco4Sal15] = useState();
   let [cco4Sal16, setCco4Sal16] = useState();
   let [cco4Sal17, setCco4Sal17] = useState();
   let [cco4Sal18, setCco4Sal18] = useState();
   let [cuboCco4_1, setCuboCco4_1] = useState();
   let [cuboCco4_2, setCuboCco4_2] = useState();
   let [cuboCco4_3, setCuboCco4_3] = useState();
   let [cuboCco4_4, setCuboCco4_4] = useState();
   let [cuboCco4_5, setCuboCco4_5] = useState();
   let [cco4Punto1, setCco4Punto1] = useState();
   let [cco4Punto2, setCco4Punto2] = useState();
   let [cco4Punto3, setCco4Punto3] = useState();
   let [cco4Punto4, setCco4Punto4] = useState();
   let [cco4Lab1, setCco4Lab1] = useState();
   let [cco4Lab2, setCco4Lab2] = useState();

   let [cco5, setCco5] = useState();
   let [cco5Sal1, setCco5Sal1] = useState();
   let [cco5Sal2, setCco5Sal2] = useState();
   let [cco5Sal3, setCco5Sal3] = useState();
   let [cuboCco5_1, setCuboCco5_1] = useState();
   let [cuboCco5_2, setCuboCco5_2] = useState();
   let [cuboCco5_3, setCuboCco5_3] = useState();
   let [cuboCco5_4, setCuboCco5_4] = useState();
   let [cuboCco5_5, setCuboCco5_5] = useState();
   let [cco5Lab1, setCco5Lab1] = useState();

   let [cancha, setCancha] = useState();
   let [cafe, setCafe] = useState();
   let [bicis, setBicis] = useState();
   let [bus, setBus] = useState();

   const marcadorAcceso9 = event => {
      if (event.target.checked) {
         console.log("entra true")
         setAcceso9(
            <Marker position={[19.0050014, -98.2057115]}>
               <Popup>
                  <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Acceso 9</p>
                  <p style={{ textAlign: 'center' }}>Categoría: Accesos</p>
                  <a style={{ textAlign: 'center' }} href='https://www.google.com/maps/dir/?api=1&destination=19.0050014,-98.2057115' target='_blank' rel='noreferrer'>Cómo llegar</a>
               </Popup>
            </Marker>
         );
      } else {
         setAcceso9();
      }
   }

   const marcadorAcceso12 = event => {
      if (event.target.checked) {
         console.log("entra true")
         setAcceso12(
            <Marker position={[19.0052791, -98.2041894]}>
               <Popup>
                  <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Acceso 12</p>
                  <p style={{ textAlign: 'center' }}>Categoría: Accesos</p>
                  <a style={{ textAlign: 'center' }} href='https://www.google.com/maps/dir/?api=1&destination=19.0052791,-98.2041894' target='_blank' rel='noreferrer'>Cómo llegar</a>
               </Popup>
            </Marker>
         );
      } else {
         setAcceso12();
      }
   }

   const marcadorCCO1 = (event, nombre, categoria, ubicacion, id) => {
      let urlIndicaciones = 'https://www.google.com/maps/dir/?api=1&destination=' + edificios[0].lat + ',' + edificios[0].lon;
      switch (id) {
         case "edif":
            if (event.target.checked) {
               setCco1(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco1();
            }
            break;
         case "sal1":
            if (event.target.checked) {
               idslist[118] = true;
               handleClick(idslist);
               setSal1(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setSal1();
               idslist[118] = false;
               handleClick(idslist);
            }
            break;
         case "sal2":
            if (event.target.checked) {
               idslist[119] = true;
               handleClick(idslist);
               setSal2(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setSal2();
               idslist[119] = false;
               handleClick(idslist);
            }
            break;
         case "sal3":
            if (event.target.checked) {
               idslist[120] = true;
               handleClick(idslist);
               setSal3(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setSal3();
               idslist[120] = false;
               handleClick(idslist);
            }
            break;
         case "sal4":
            if (event.target.checked) {
               idslist[121] = true;
               handleClick(idslist);
               setSal4(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setSal4();
               idslist[121] = false;
               handleClick(idslist);
            }
            break;
         case "sal5":
            if (event.target.checked) {
               idslist[122] = true;
               handleClick(idslist);
               setSal5(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setSal5();
               idslist[122] = false;
               handleClick(idslist);
            }
            break;
         case "sal6":
            if (event.target.checked) {
               setSal6(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setSal6();
            }
            break;
         case "cubo103":
            if (event.target.checked) {
               idslist[92] = true;
               handleClick(idslist);
               setCubo1(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo1();
               idslist[92] = false;
               handleClick(idslist);
            }
            break;
         case "cubo104":
            if (event.target.checked) {
               idslist[93] = true;
               handleClick(idslist);
               setCubo2(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo2();
               idslist[93] = false;
               handleClick(idslist);
            }
            break;
         case "cubo105":
            if (event.target.checked) {
               idslist[94] = true;
               handleClick(idslist);
               setCubo3(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo3();
               idslist[94] = false;
               handleClick(idslist);
            }
            break;
         case "cubo106":
            if (event.target.checked) {
               idslist[95] = true;
               handleClick(idslist);
               setCubo4(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo4();
               idslist[95] = false;
               handleClick(idslist);
            }
            break;
         case "cubo107":
            if (event.target.checked) {
               idslist[96] = true;
               handleClick(idslist);
               setCubo5(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo5();
               idslist[96] = false;
               handleClick(idslist);
            }
            break;
         case "cubo108":
            if (event.target.checked) {
               idslist[97] = true;
               handleClick(idslist);
               setCubo6(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo6();
               idslist[97] = false;
               handleClick(idslist);
            }
            break;
         case "cubo109":
            if (event.target.checked) {
               idslist[98] = true;
               handleClick(idslist);
               setCubo7(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo7();
               idslist[98] = false;
               handleClick(idslist);
            }
            break;
         case "cubo110":
            if (event.target.checked) {
               idslist[99] = true;
               handleClick(idslist);
               setCubo8(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo8();
               idslist[99] = false;
               handleClick(idslist);
            }
            break;
         case "cubo111":
            if (event.target.checked) {
               idslist[100] = true;
               handleClick(idslist);
               setCubo9(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo9();
               idslist[100] = false;
               handleClick(idslist);
            }
            break;
         case "cubo112":
            if (event.target.checked) {
               idslist[101] = true;
               handleClick(idslist);
               setCubo10(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo10();
               idslist[101] = false;
               handleClick(idslist);
            }
            break;
         case "cubo113":
            if (event.target.checked) {
               idslist[102] = true;
               handleClick(idslist);
               setCubo11(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo11();
               idslist[102] = false;
               handleClick(idslist);
            }
            break;
         case "cubo114":
            if (event.target.checked) {
               idslist[103] = true;
               handleClick(idslist);
               setCubo12(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo12();
               idslist[103] = false;
               handleClick(idslist);
            }
            break;
         case "cubo115":
            if (event.target.checked) {
               idslist[114] = true;
               handleClick(idslist);
               setCubo13(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo13();
               idslist[114] = false;
               handleClick(idslist);
            }
            break;
         case "cubo116":
            if (event.target.checked) {
               idslist[113] = true;
               handleClick(idslist);
               setCubo14(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo14();
               idslist[113] = false;
               handleClick(idslist);
            }
            break;
         case "cubo117":
            if (event.target.checked) {
               idslist[112] = true;
               handleClick(idslist);
               setCubo15(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo15();
               idslist[112] = false;
               handleClick(idslist);
            }
            break;
         case "cubo118":
            if (event.target.checked) {
               idslist[111] = true;
               handleClick(idslist);
               setCubo16(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo16();
               idslist[111] = false;
               handleClick(idslist);
            }
            break;
         case "cubo119":
            if (event.target.checked) {
               idslist[110] = true;
               handleClick(idslist);
               setCubo17(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo17();
               idslist[110] = false;
               handleClick(idslist);
            }
            break;
         case "cubo120":
            if (event.target.checked) {
               idslist[109] = true;
               handleClick(idslist);
               setCubo18(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo18();
               idslist[109] = false;
               handleClick(idslist);
            }
            break;
         case "cubo121":
            if (event.target.checked) {
               idslist[108] = true;
               handleClick(idslist);
               setCubo19(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo19();
               idslist[108] = false;
               handleClick(idslist);
            }
            break;
         case "cubo122":
            if (event.target.checked) {
               idslist[107] = true;
               handleClick(idslist);
               setCubo20(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo20();
               idslist[107] = false;
               handleClick(idslist);
            }
            break;
         case "cubo123":
            if (event.target.checked) {
               idslist[106] = true;
               handleClick(idslist);
               setCubo21(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo21();
               idslist[106] = false;
               handleClick(idslist);
            }
            break;
         case "cubo124":
            if (event.target.checked) {
               idslist[105] = true;
               handleClick(idslist);
               setCubo22(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo22();
               idslist[105] = false;
               handleClick(idslist);
            }
            break;
         case "cubo125":
            if (event.target.checked) {
               idslist[104] = true;
               handleClick(idslist);
               setCubo23(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCubo23();
               idslist[104] = false;
               handleClick(idslist);
            }
            break;
         case "puntomed":
            if (event.target.checked) {
               idslist[116] = true;
               handleClick(idslist);
               setPunto1(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setPunto1();
               idslist[116] = false;
               handleClick(idslist);
            }
            break;
         case "puntoauto":
            if (event.target.checked) {
               idslist[102] = true;
               handleClick(idslist);
               setPunto2(
                  <Marker position={[edificios[0].lat, edificios[0].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setPunto2();
               idslist[102] = false;
               handleClick(idslist);
            }
            break;
         default: break;
      }
   }

   const marcadorCCO2 = (event, nombre, categoria, ubicacion, id) => {
      let urlIndicaciones = 'https://www.google.com/maps/dir/?api=1&destination=' + edificios[1].lat + ',' + edificios[1].lon;
      switch (id) {
         case "edif":
            if (event.target.checked) {
               setCco2(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco2();
            }
            break;
         case "sal1":
            if (event.target.checked) {
               idslist[90] = true;
               handleClick(idslist);
               setSalCco2_1(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setSalCco2_1();
               idslist[90] = false;
               handleClick(idslist);
            }
            break;
         case "cubo1":
            if (event.target.checked) {
               idslist[73] = true;
               handleClick(idslist);
               setCuboCco2_1(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_1();
               idslist[73] = false;
               handleClick(idslist);
            }
            break;
         case "cubo2":
            if (event.target.checked) {
               idslist[73] = true;
               handleClick(idslist);
               setCuboCco2_2(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_2();
               idslist[73] = false;
               handleClick(idslist);
            }
            break;
         case "cubo3":
            if (event.target.checked) {
               idslist[73] = true;
               handleClick(idslist);
               setCuboCco2_3(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_3();
               idslist[73] = false;
               handleClick(idslist);
            }
            break;
         case "cubo4":
            if (event.target.checked) {
               idslist[73] = true;
               handleClick(idslist);
               setCuboCco2_4(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_4();
               idslist[73] = false;
               handleClick(idslist);
            }
            break;
         case "cubo5":
            if (event.target.checked) {
               idslist[73] = true;
               handleClick(idslist);
               setCuboCco2_5(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_5();
               idslist[73] = false;
               handleClick(idslist);
            }
            break;
         case "cubo6":
            if (event.target.checked) {
               idslist[74] = true;
               handleClick(idslist);
               setCuboCco2_6(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_6();
               idslist[74] = false;
               handleClick(idslist);
            }
            break;
         case "cubo7":
            if (event.target.checked) {
               idslist[74] = true;
               handleClick(idslist);
               setCuboCco2_7(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_7();
               idslist[74] = false;
               handleClick(idslist);
            }
            break;
         case "cubo8":
            if (event.target.checked) {
               idslist[74] = true;
               handleClick(idslist);
               setCuboCco2_8(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_8();
               idslist[74] = false;
               handleClick(idslist);
            }
            break;
         case "cubo9":
            if (event.target.checked) {
               idslist[74] = true;
               handleClick(idslist);
               setCuboCco2_9(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_9();
               idslist[74] = false;
               handleClick(idslist);
            }
            break;
         case "cubo10":
            if (event.target.checked) {
               idslist[74] = true;
               handleClick(idslist);
               setCuboCco2_10(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_10();
               idslist[74] = false;
               handleClick(idslist);
            }
            break;
         case "cubo11":
            if (event.target.checked) {
               idslist[74] = true;
               handleClick(idslist);
               setCuboCco2_11(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_11();
               idslist[74] = false;
               handleClick(idslist);
            }
            break;
         case "cubo12":
            if (event.target.checked) {
               idslist[76] = true;
               handleClick(idslist);
               setCuboCco2_12(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_12();
               idslist[76] = false;
               handleClick(idslist);
            }
            break;
         case "cubo13":
            if (event.target.checked) {
               idslist[84] = true;
               handleClick(idslist);
               setCuboCco2_13(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_13();
               idslist[84] = false;
               handleClick(idslist);
            }
            break;
         case "cubo14":
            if (event.target.checked) {
               idslist[86] = true;
               handleClick(idslist);
               setCuboCco2_14(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_14();
               idslist[86] = false;
               handleClick(idslist);
            }
            break;
         case "cubo15":
            if (event.target.checked) {
               idslist[86] = true;
               handleClick(idslist);
               setCuboCco2_15(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_15();
               idslist[86] = true;
               handleClick(idslist);
            }
            break;
         case "cubo16":
            if (event.target.checked) {
               idslist[85] = true;
               handleClick(idslist);
               setCuboCco2_16(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_16();
               idslist[85] = false;
               handleClick(idslist);
            }
            break;
         case "cubo17":
            if (event.target.checked) {
               idslist[85] = true;
               handleClick(idslist);
               setCuboCco2_17(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_17();
               idslist[85] = false;
               handleClick(idslist);
            }
            break;
         case "cubo18":
            if (event.target.checked) {
               idslist[85] = true;
               handleClick(idslist);
               setCuboCco2_18(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_18();
               idslist[85] = false;
               handleClick(idslist);
            }
            break;
         case "cubo19":
            if (event.target.checked) {
               idslist[85] = true;
               handleClick(idslist);
               setCuboCco2_19(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_19();
               idslist[85] = false;
               handleClick(idslist);
            }
            break;
         case "cubo20":
            if (event.target.checked) {
               idslist[85] = true;
               handleClick(idslist);
               setCuboCco2_20(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_20();
               idslist[85] = false;
               handleClick(idslist);
            }
            break;
         case "cubo21":
            if (event.target.checked) {
               idslist[85] = true;
               handleClick(idslist);
               setCuboCco2_21(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco2_21();
               idslist[85] = false;
               handleClick(idslist);
            }
            break;
         case "comedor":
            if (event.target.checked) {
               idslist[75] = true;
               handleClick(idslist);
               setCco2Punto1(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco2Punto1();
               idslist[75] = false;
               handleClick(idslist);
            }
            break;
         case "auditorio":
            if (event.target.checked) {
               idslist[70] = true;
               handleClick(idslist);
               setCco2Punto2(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco2Punto2();
               idslist[70] = false;
               handleClick(idslist);
            }
            break;
         case "lab1":
            if (event.target.checked) {
               idslist[83] = true;
               handleClick(idslist);
               setCco2Lab1(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco2Lab1();
               idslist[83] = false;
               handleClick(idslist);
            }
            break;
         case "lab2":
            if (event.target.checked) {
               idslist[83] = true;
               handleClick(idslist);
               setCco2Lab2(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco2Lab2();
               idslist[83] = false;
               handleClick(idslist);
            }
            break;
         case "lab3":
            if (event.target.checked) {
               idslist[78] = true;
               handleClick(idslist);
               setCco2Lab3(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco2Lab3();
               idslist[78] = false;
               handleClick(idslist);
            }
            break;
         case "lab4":
            if (event.target.checked) {
               idslist[79] = true;
               handleClick(idslist);
               setCco2Lab4(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco2Lab4();
               idslist[79] = false;
               handleClick(idslist);
            }
            break;
         case "lab5":
            if (event.target.checked) {
               idslist[82] = true;
               handleClick(idslist);
               setCco2Lab5(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco2Lab5();
               idslist[82] = false;
               handleClick(idslist);
            }
            break;
         case "lab6":
            if (event.target.checked) {
               idslist[77] = true;
               handleClick(idslist);
               setCco2Lab6(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco2Lab6();
               idslist[77] = false;
               handleClick(idslist);
            }
            break;
         case "lab7":
            if (event.target.checked) {
               idslist[80] = true;
               handleClick(idslist);
               setCco2Lab7(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco2Lab7();
               idslist[80] = false;
               handleClick(idslist);
            }
            break;
         case "lab8":
            if (event.target.checked) {
               idslist[81] = true;
               handleClick(idslist);
               setCco2Lab8(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco2Lab8();
               idslist[81] = false;
               handleClick(idslist);
            }
            break;
         case "lab9":
            if (event.target.checked) {
               idslist[88] = true;
               handleClick(idslist);
               setCco2Lab9(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco2Lab9();
               idslist[88] = false;
               handleClick(idslist);
            }
            break;
         case "lab10":
            if (event.target.checked) {
               idslist[89] = true;
               handleClick(idslist);
               setCco2Lab10(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco2Lab10();
               idslist[89] = false;
               handleClick(idslist);
            }
            break;
         case "lab11":
            if (event.target.checked) {
               idslist[87] = true;
               handleClick(idslist);
               setCco2Lab11(
                  <Marker position={[edificios[1].lat, edificios[1].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco2Lab11();
               idslist[87] = false;
               handleClick(idslist);
            }
            break;
         default: break;
      }
   }

   const marcadorCCO3 = (event, nombre, categoria, ubicacion, id) => {
      let urlIndicaciones = 'https://www.google.com/maps/dir/?api=1&destination=' + edificios[2].lat + ',' + edificios[2].lon;
      switch (id) {
         case "edif":
            if (event.target.checked) {
               setCco3(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3();
            }
            break;
         case "sal1":
            if (event.target.checked) {
               idslist[22] = true;
               handleClick(idslist);
               setCco3Sal1(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Sal1();
               idslist[22] = false;
               handleClick(idslist);
            }
            break;
         case "sal2":
            if (event.target.checked) {
               setCco3Sal2(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Sal2();
            }
            break;
         case "sal3":
            if (event.target.checked) {
               setCco3Sal3(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Sal3();
            }
            break;
         case "cubo1":
            if (event.target.checked) {
               idslist[33] = true;
               handleClick(idslist);
               setCuboCco3_1(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_1();
               idslist[33] = true;
               handleClick(idslist);
            }
            break;
         case "cubo2":
            if (event.target.checked) {
               idslist[34] = true;
               handleClick(idslist);
               setCuboCco3_2(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_2();
               idslist[34] = false;
               handleClick(idslist);
            }
            break;
         case "cubo3":
            if (event.target.checked) {
               idslist[36] = true;
               handleClick(idslist);
               setCuboCco3_3(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_3();
               idslist[36] = false;
               handleClick(idslist);
            }
            break;
         case "cubo4":
            if (event.target.checked) {
               idslist[37] = true;
               handleClick(idslist);
               setCuboCco3_4(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_4();
               idslist[37] = false;
               handleClick(idslist);
            }
            break;
         case "cubo5":
            if (event.target.checked) {
               idslist[38] = true;
               handleClick(idslist);
               setCuboCco3_5(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_5();
               idslist[38] = false;
               handleClick(idslist);
            }
            break;
         case "cubo6":
            if (event.target.checked) {
               idslist[39] = true;
               handleClick(idslist);
               setCuboCco3_6(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_6();
               idslist[39] = false;
               handleClick(idslist);
            }
            break;
         case "cubo7":
            if (event.target.checked) {
               idslist[29] = true;
               handleClick(idslist);
               setCuboCco3_7(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_7();
               idslist[29] = false;
               handleClick(idslist);
            }
            break;
         case "cubo8":
            if (event.target.checked) {
               idslist[27] = true;
               handleClick(idslist);
               setCuboCco3_8(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_8();
               idslist[27] = false;
               handleClick(idslist);
            }
            break;
         case "cubo9":
            if (event.target.checked) {
               idslist[28] = true;
               handleClick(idslist);
               setCuboCco3_9(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_9();
               idslist[28] = false;
               handleClick(idslist);
            }
            break;
         case "cubo10":
            if (event.target.checked) {
               idslist[30] = true;
               handleClick(idslist);
               setCuboCco3_10(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_10();
               idslist[30] = false;
               handleClick(idslist);
            }
            break;
         case "cubo11":
            if (event.target.checked) {
               setCuboCco3_11(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_11();
            }
            break;
         case "cubo12":
            if (event.target.checked) {
               setCuboCco3_12(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_12();
            }
            break;
         case "cubo13":
            if (event.target.checked) {
               setCuboCco3_13(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_13();
            }
            break;
         case "cubo14":
            if (event.target.checked) {
               setCuboCco3_14(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_14();
            }
            break;
         case "cubo15":
            if (event.target.checked) {
               setCuboCco3_15(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_15();
            }
            break;
         case "cubo16":
            if (event.target.checked) {
               setCuboCco3_16(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_16();
            }
            break;
         case "cubo17":
            if (event.target.checked) {
               idslist[15] = true;
               handleClick(idslist);
               setCuboCco3_17(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_17();
               idslist[15] = false;
               handleClick(idslist);
            }
            break;
         case "cubo18":
            if (event.target.checked) {
               idslist[16] = true;
               handleClick(idslist);
               setCuboCco3_18(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_18();
               idslist[16] = false;
               handleClick(idslist);
            }
            break;
         case "cubo19":
            if (event.target.checked) {
               idslist[17] = true;
               handleClick(idslist);
               setCuboCco3_19(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_19();
               idslist[17] = false;
               handleClick(idslist);
            }
            break;
         case "cubo20":
            if (event.target.checked) {
               idslist[18] = true;
               handleClick(idslist);
               setCuboCco3_20(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_20();
               idslist[18] = false;
               handleClick(idslist);
            }
            break;
         case "cubo21":
            if (event.target.checked) {
               idslist[1] = true;
               handleClick(idslist);
               setCuboCco3_21(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_21();
               idslist[1] = false;
               handleClick(idslist);
            }
            break;
         case "cubo22":
            if (event.target.checked) {
               idslist[5] = true;
               handleClick(idslist);
               setCuboCco3_22(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco3_22();
               idslist[5] = false;
               handleClick(idslist);
            }
            break;
         case "biblioteca":
            if (event.target.checked) {
               idslist[14] = true;
               handleClick(idslist);
               setCco3Punto1(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Punto1();
               idslist[14] = false;
               handleClick(idslist);
            }
            break;
         case "lab1":
            if (event.target.checked) {
               idslist[23] = true;
               handleClick(idslist);
               setCco3Lab1(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Lab1();
               idslist[23] = false;
               handleClick(idslist);
            }
            break;
         case "lab2":
            if (event.target.checked) {
               idslist[24] = true;
               handleClick(idslist);
               setCco3Lab2(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Lab2();
               idslist[24] = false;
               handleClick(idslist);
            }
            break;
         case "lab3":
            if (event.target.checked) {
               idslist[25] = true;
               handleClick(idslist);
               setCco3Lab3(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Lab3();
               idslist[25] = false;
               handleClick(idslist);
            }
            break;
         case "lab4":
            if (event.target.checked) {
               idslist[26] = true;
               handleClick(idslist);
               setCco3Lab4(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Lab4();
               idslist[26] = false;
               handleClick(idslist);
            }
            break;
         case "lab5":
            if (event.target.checked) {
               idslist[20] = true;
               handleClick(idslist);
               setCco3Lab5(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Lab5();
               idslist[20] = false;
               handleClick(idslist);
            }
            break;
         case "lab6":
            if (event.target.checked) {
               idslist[21] = true;
               handleClick(idslist);
               setCco3Lab6(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Lab6();
               idslist[21] = false;
               handleClick(idslist);
            }
            break;
         case "lab7":
            if (event.target.checked) {
               idslist[19] = true;
               handleClick(idslist);
               setCco3Lab7(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Lab7();
               idslist[19] = false;
               handleClick(idslist);
            }
            break;
         case "lab8":
            if (event.target.checked) {
               idslist[8] = true;
               handleClick(idslist);
               setCco3Lab8(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Lab8();
               idslist[8] = false;
               handleClick(idslist);
            }
            break;
         case "lab9":
            if (event.target.checked) {
               idslist[6] = true;
               handleClick(idslist);
               setCco3Lab9(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Lab9();
               idslist[6] = false;
               handleClick(idslist);
            }
            break;
         case "lab10":
            if (event.target.checked) {
               idslist[7] = true;
               handleClick(idslist);
               setCco3Lab10(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Lab10();
               idslist[7] = false;
               handleClick(idslist);
            }
            break;
         case "lab11":
            if (event.target.checked) {
               idslist[10] = true;
               handleClick(idslist);
               setCco3Lab11(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Lab11();
               idslist[10] = false;
               handleClick(idslist);
            }
            break;
         case "lab12":
            if (event.target.checked) {
               idslist[9] = true;
               handleClick(idslist);
               setCco3Lab12(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Lab12();
               idslist[9] = false;
               handleClick(idslist);
            }
            break;
         case "lab13":
            if (event.target.checked) {
               idslist[11] = true;
               handleClick(idslist);
               setCco3Lab13(
                  <Marker position={[edificios[2].lat, edificios[2].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco3Lab13();
               idslist[11] = false;
               handleClick(idslist);
            }
            break;
         default: break;
      }
   }

   const marcadorCCO4 = (event, nombre, categoria, ubicacion, id) => {
      let urlIndicaciones = 'https://www.google.com/maps/dir/?api=1&destination=' + edificios[3].lat + ',' + edificios[3].lon;
      switch (id) {
         case "edif":
            if (event.target.checked) {
               setCco4(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4();
            }
            break;
         case "sal1":
            if (event.target.checked) {
               idslist[40] = true;
               handleClick(idslist);
               setCco4Sal1(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Sal1();
               idslist[40] = false;
               handleClick(idslist);
            }
            break;
         case "sal2":
            if (event.target.checked) {
               idslist[41] = true;
               handleClick(idslist);
               setCco4Sal2(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Sal2();
               idslist[41] = false;
               handleClick(idslist);
            }
            break;
         case "sal3":
            if (event.target.checked) {
               idslist[42] = true;
               handleClick(idslist);
               setCco4Sal3(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Sal3();
               idslist[42] = false;
               handleClick(idslist);
            }
            break;
         case "sal4":
            if (event.target.checked) {
               idslist[43] = true;
               handleClick(idslist);
               setCco4Sal4(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Sal4();
               idslist[43] = false;
               handleClick(idslist);
            }
            break;
         case "sal5":
            if (event.target.checked) {
               idslist[45] = true;
               handleClick(idslist);
               setCco4Sal5(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Sal5();
               idslist[45] = false;
               handleClick(idslist);
            }
            break;
         case "sal6":
            if (event.target.checked) {
               idslist[46] = true;
               handleClick(idslist);
               setCco4Sal6(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Sal6();
               idslist[46] = false;
               handleClick(idslist);
            }
            break;
         case "sal7":
            if (event.target.checked) {
               idslist[47] = true;
               handleClick(idslist);
               setCco4Sal7(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Sal7();
               idslist[47] = false;
               handleClick(idslist);
            }
            break;
         case "sal8":
            if (event.target.checked) {
               idslist[48] = true;
               handleClick(idslist);
               setCco4Sal8(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Sal8();
               idslist[48] = false;
               handleClick(idslist);
            }
            break;
         case "sal9":
            if (event.target.checked) {
               idslist[55] = true;
               handleClick(idslist);
               setCco4Sal9(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Sal9();
               idslist[55] = false;
               handleClick(idslist);
            }
            break;
         case "sal10":
            if (event.target.checked) {
               idslist[56] = true;
               handleClick(idslist);
               setCco4Sal10(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Sal10();
               idslist[56] = false;
               handleClick(idslist);
            }
            break;
         case "sal11":
            if (event.target.checked) {
               idslist[57] = true;
               handleClick(idslist);
               setCco4Sal11(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Sal11();
               idslist[57] = false;
               handleClick(idslist);
            }
            break;
         case "sal12":
            if (event.target.checked) {
               idslist[58] = true;
               handleClick(idslist);
               setCco4Sal12(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Sal12();
               idslist[58] = false;
               handleClick(idslist);
            }
            break;
         case "sal13":
            if (event.target.checked) {
               idslist[62] = true;
               handleClick(idslist);
               setCco4Sal13(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Sal13();
               idslist[62] = false;
               handleClick(idslist);
            }
            break;
         case "sal14":
            if (event.target.checked) {
               idslist[61] = true;
               handleClick(idslist);
               setCco4Sal14(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Sal14();
               idslist[61] = false;
               handleClick(idslist);
            }
            break;
         case "sal15":
            if (event.target.checked) {
               idslist[68] = true;
               handleClick(idslist);
               setCco4Sal15(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Sal15();
               idslist[68] = false;
               handleClick(idslist);
            }
            break;
         case "sal16":
            if (event.target.checked) {
               idslist[69] = true;
               handleClick(idslist);
               setCco4Sal16(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Sal16();
               idslist[69] = false;
               handleClick(idslist);
            }
            break;
         case "sal17":
            if (event.target.checked) {
               idslist[67] = true;
               handleClick(idslist);
               setCco4Sal17(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Sal17();
               idslist[67] = false;
               handleClick(idslist);
            }
            break;
         case "sal18":
            if (event.target.checked) {
               idslist[66] = true;
               handleClick(idslist);
               setCco4Sal18(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Sal18();
               idslist[66] = true;
               handleClick(idslist);
            }
            break;
         case "cubo1":
            if (event.target.checked) {
               idslist[65] = true;
               handleClick(idslist);
               setCuboCco4_1(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco4_1();
               idslist[65] = false;
               handleClick(idslist);
            }
            break;
         case "cubo2":
            if (event.target.checked) {
               idslist[65] = true;
               handleClick(idslist);
               setCuboCco4_2(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco4_2();
               idslist[65] = false;
               handleClick(idslist);
            }
            break;
         case "cubo3":
            if (event.target.checked) {
               idslist[65] = true;
               handleClick(idslist);
               setCuboCco4_3(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco4_3();
               idslist[65] = false;
               handleClick(idslist);
            }
            break;
         case "cubo4":
            if (event.target.checked) {
               idslist[64] = true;
               handleClick(idslist);
               setCuboCco4_4(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco4_4();
               idslist[64] = false;
               handleClick(idslist);
            }
            break;
         case "cubo5":
            if (event.target.checked) {
               idslist[63] = true;
               handleClick(idslist);
               setCuboCco4_5(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco4_5();
               idslist[63] = false;
               handleClick(idslist);
            }
            break;
         case "sersoc":
            if (event.target.checked) {
               idslist[53] = true;
               handleClick(idslist);
               setCco4Punto1(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Punto1();
               idslist[53] = false;
               handleClick(idslist);
            }
            break;
         case "secrea":
            if (event.target.checked) {
               idslist[49] = true;
               handleClick(idslist);
               setCco4Punto2(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Punto2();
               idslist[49] = false;
               handleClick(idslist);
            }
            break;
         case "archivo":
            if (event.target.checked) {
               idslist[51] = true;
               handleClick(idslist);
               setCco4Punto3(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Punto3();
               idslist[51] = false;
               handleClick(idslist);
            }
            break;
         case "direccion":
            if (event.target.checked) {
               idslist[50] = true;
               handleClick(idslist);
               setCco4Punto4(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Punto4();
               idslist[50] = false;
               handleClick(idslist);
            }
            break;
         case "lab1":
            if (event.target.checked) {
               idslist[54] = true;
               handleClick(idslist);
               setCco4Lab1(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Lab1();
               idslist[54] = false;
               handleClick(idslist);
            }
            break;
         case "lab2":
            if (event.target.checked) {
               idslist[60] = true;
               handleClick(idslist);
               setCco4Lab2(
                  <Marker position={[edificios[3].lat, edificios[3].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco4Lab2();
               idslist[60] = false;
               handleClick(idslist);
            }
            break;
         default: break;
      }
   }

   const marcadorCCO5 = (event, nombre, categoria, ubicacion, id) => {
      let urlIndicaciones = 'https://www.google.com/maps/dir/?api=1&destination=' + edificios[4].lat + ',' + edificios[4].lon;
      switch (id) {
         case "edif":
            if (event.target.checked) {
               setCco5(
                  <Marker position={[edificios[4].lat, edificios[4].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco5();
            }
            break;
         case "sal1":
            if (event.target.checked) {
               idslist[127] = true;
               handleClick(idslist);
               setCco5Sal1(
                  <Marker position={[edificios[4].lat, edificios[4].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco5Sal1();
               idslist[127] = false;
               handleClick(idslist);
            }
            break;
         case "sal2":
            if (event.target.checked) {
               idslist[128] = true;
               handleClick(idslist);
               setCco5Sal2(
                  <Marker position={[edificios[4].lat, edificios[4].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco5Sal2();
               idslist[128] = false;
               handleClick(idslist);
            }
            break;
         case "sal3":
            if (event.target.checked) {
               idslist[129] = true;
               handleClick(idslist);
               setCco5Sal3(
                  <Marker position={[edificios[4].lat, edificios[4].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco5Sal3();
               idslist[129] = false;
               handleClick(idslist);
            }
            break;
         case "cubo1":
            if (event.target.checked) {
               idslist[131] = true;
               handleClick(idslist);
               setCuboCco5_1(
                  <Marker position={[edificios[4].lat, edificios[4].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco5_1();
               idslist[131] = false;
               handleClick(idslist);
            }
            break;
         case "cubo2":
            if (event.target.checked) {
               idslist[134] = true;
               handleClick(idslist);
               setCuboCco5_2(
                  <Marker position={[edificios[4].lat, edificios[4].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco5_2();
               idslist[134] = false;
               handleClick(idslist);
            }
            break;
         case "cubo3":
            if (event.target.checked) {
               idslist[135] = true;
               handleClick(idslist);
               setCuboCco5_3(
                  <Marker position={[edificios[4].lat, edificios[4].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco5_3();
               idslist[135] = false;
               handleClick(idslist);
            }
            break;
         case "cubo4":
            if (event.target.checked) {
               idslist[133] = true;
               handleClick(idslist);
               setCuboCco5_4(
                  <Marker position={[edificios[4].lat, edificios[4].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco5_4();
               idslist[133] = false;
               handleClick(idslist);
            }
            break;
         case "cubo5":
            if (event.target.checked) {
               idslist[125] = true;
               handleClick(idslist);
               setCuboCco5_5(
                  <Marker position={[edificios[4].lat, edificios[4].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCuboCco5_5();
               idslist[125] = false;
               handleClick(idslist);
            }
            break;
         case "lab1":
            if (event.target.checked) {
               idslist[126] = true;
               handleClick(idslist);
               setCco5Lab1(
                  <Marker position={[edificios[4].lat, edificios[4].lon]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCco5Lab1();
               idslist[126] = false;
               handleClick(idslist);
            }
            break;
         default: break;
      }
   }

   const puntosExteriores = (event, nombre, categoria, ubicacion, id) => {
      switch (id) {
         case "cancha":
            if (event.target.checked) {
               let urlIndicaciones = 'https://www.google.com/maps/dir/?api=1&destination=' + 19.00475108373063 + ',' + -98.2043329894259;
               setCancha(
                  <Marker position={[19.00475108373063, -98.2043329894259]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCancha();
            }
            break;
         case "cafe":
            if (event.target.checked) {
               let urlIndicaciones = 'https://www.google.com/maps/dir/?api=1&destination=' + 19.005334364085535 + ',' + -98.20514033431238;
               setCafe(
                  <Marker position={[19.005334364085535, -98.20514033431238]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setCafe();
            }
            break;
         case "bicis":
            if (event.target.checked) {
               let urlIndicaciones = 'https://www.google.com/maps/dir/?api=1&destination=' + 19.00475108372975 + ',' + -98.20520604841526;
               setBicis(
                  <Marker position={[19.00475108372975, -98.20520604841526]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setBicis();
            }
            break;
         case "bus":
            if (event.target.checked) {
               let urlIndicaciones = 'https://www.google.com/maps/dir/?api=1&destination=' + 19.004436618689713 + ',' + -98.20357794761088;
               setBus(
                  <Marker position={[19.004436618689713, -98.20357794761088]}>
                     <Popup>
                        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{nombre}</p>
                        <p style={{ textAlign: 'center' }}>Categoría: {categoria}</p>
                        <p style={{ textAlign: 'center' }}>Ubicación: {ubicacion}</p>
                        <a style={{ textAlign: 'center' }} href={urlIndicaciones} target='_blank' rel='noreferrer'>Cómo llegar</a>
                     </Popup>
                  </Marker>
               );
            } else {
               setBus();
            }
            break;
         default: break;
      }
   }

   useEffect(() => {
      bajarTablas();
   }, []);

   if (cargando) {
      return (
         <div className="text-center my-50">
            <p className="fs-3 fw-bolder user-select-none" style={{ color: 'white' }}>Obteniendo tablas...</p>
            <div className="spinner-border m-5 text-white" role="status">
               <span className="visually-hidden">Cargando...</span>
            </div>
         </div>
      );
   }

   const mapaEstatico = {
      zoomControl: false,
      doubleClickZoom: false,
      dragging: false,
      zoomSnap: false,
      zoomDelta: false,
      trackResize: false,
      touchZoom: false,
      scrollWheelZoom: false
   }

   return (
      <>
         <div className='Contenido mb-3' style={{ height: '100vh' }}>
            <div className='d-flex align-items-center' width='100%' style={{ overflowY: 'scroll', position: 'fixed', height: '100vh', backgroundColor: '#b2c0cb', width: 'inherit' }}>
               <Sidebar className='d-flex' collapsedWidth='0px'>
                  <Menu >
                     <div className='d-flex justify-content-center'>
                        <img src={Logo} alt='Logo' style={{ height: '150px', position: 'relative' }} />
                     </div>
                     <Label className='d-flex justify-content-center' size='lg' style={{ fontWeight: 'bold' }}>Menú</Label>
                     <div className='d-flex justify-content-center'>
                        <InputGroup style={{ width: '80%' }}>
                           <InputGroupText hidden><i className='bi bi-search' /></InputGroupText>
                           <Input hidden style={{ textAlign: 'center' }} placeholder="Buscar..." />
                           <div className='d-flex justify-content-center' style={{ width: '100%' }}>
                              <input type="radio" checked={radio === 1 ? true : false} onChange={() => setRadio(1)} /> Mapa
                              <input type="radio" className='ml-3' checked={radio === 0 ? true : false} onChange={() => setRadio(0)} /> Modelo
                           </div>
                        </InputGroup>
                     </div>
                     <hr />
                     <SubMenu label="Accesos" style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                        <MenuItem>
                           <Form style={{ textAlign: 'center' }}>
                              <FormGroup check inline>
                                 <Input type='checkbox' onChange={marcadorAcceso9} />
                                 <Label check>Acceso 9</Label>
                              </FormGroup>
                              <FormGroup check inline>
                                 <Input type='checkbox' onChange={marcadorAcceso12} />
                                 <Label check>Acceso 12</Label>
                              </FormGroup>
                           </Form>
                        </MenuItem>
                     </SubMenu>

                     <SubMenu label="Edificios" style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                        <MenuItem style={{ height: 'auto' }}>
                           <Form style={{ textAlign: 'center' }}>
                              <FormGroup check inline>
                                 <Input type='checkbox' onChange={(event) => marcadorCCO1(event, 'CCO1', 'Edificio', 'CCO1', 'edif')} />
                                 <Label check>CCO1</Label>
                              </FormGroup>
                              <FormGroup check inline>
                                 <Input type='checkbox' onChange={(event) => marcadorCCO2(event, 'CCO2', 'Edificio', 'CCO2', 'edif')} />
                                 <Label check>CCO2</Label>
                              </FormGroup>
                           </Form>

                           <Form style={{ textAlign: 'center' }}>
                              <FormGroup check inline>
                                 <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'CCO3', 'Edificio', 'CCO3', 'edif')} />
                                 <Label check>CCO3</Label>
                              </FormGroup>
                              <FormGroup check inline>
                                 <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'CCO4', 'Edificio', 'CCO4', 'edif')} />
                                 <Label check>CCO4</Label>
                              </FormGroup>
                           </Form>

                           <Form style={{ textAlign: 'center' }}>
                              <FormGroup check inline>
                                 <Input type='checkbox' onChange={(event) => marcadorCCO5(event, 'CCO5', 'Edificio', 'CCO5', 'edif')} />
                                 <Label check>CCO5</Label>
                              </FormGroup>
                           </Form>
                        </MenuItem>
                     </SubMenu>

                     <SubMenu label="Salones" style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                        <MenuItem className='d-flex justify-content-center' style={{ height: 'auto' }}>
                           <SubMenu label="CCO1" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, 'Salón 1', 'Salón de Clases', 'CCO1 - Sótano', 'sal1')} />
                                    <Label check>1</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, 'Salón 2', 'Salón de Clases', 'CCO1 - Sótano', 'sal2')} />
                                    <Label check>2</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, 'Salón 3', 'Salón de Clases', 'CCO1 - Sótano', 'sal3')} />
                                    <Label check>3</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, 'Salón 4', 'Salón de Clases', 'CCO1 - Sótano', 'sal4')} />
                                    <Label check>4</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, 'Salón 5', 'Salón de Clases', 'CCO1 - Sótano', 'sal5')} />
                                    <Label check>5</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, 'Salón 6', 'Salón de Clases', 'CCO1 - Sótano', 'sal6')} />
                                    <Label check>6</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO2" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, 'Salón 305', 'Salón de Clases', 'CCO2 - Segunda Planta', 'sal1')} />
                                    <Label check>305</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO3" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'Salón 208', 'Salón de Clases', 'CCO3 - Primera Planta', 'sal1')} />
                                    <Label check>208</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'Salón 002', 'Salón de Clases', 'CCO3 - Primera Planta', 'sal2')} />
                                    <Label check>002</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'Salón 003', 'Salón de Clases', 'CCO3 - Primera Planta', 'sal3')} />
                                    <Label check>003</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO4" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Salón 101', 'Salón de Clases', 'CCO4 - Planta Baja', 'sal1')} />
                                    <Label check>101</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Salón 102', 'Salón de Clases', 'CCO4 - Planta Baja', 'sal2')} />
                                    <Label check>102</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Salón 103', 'Salón de Clases', 'CCO4 - Planta Baja', 'sal3')} />
                                    <Label check>103</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Salón 104', 'Salón de Clases', 'CCO4 - Planta Baja', 'sal4')} />
                                    <Label check>104</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Salón 201', 'Salón de Clases', 'CCO4 - Primera Planta', 'sal5')} />
                                    <Label check>201</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Salón 202', 'Salón de Clases', 'CCO4 - Primera Planta', 'sal6')} />
                                    <Label check>202</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Salón 203', 'Salón de Clases', 'CCO4 - Primera Planta', 'sal7')} />
                                    <Label check>203</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Salón 204', 'Salón de Clases', 'CCO4 - Primera Planta', 'sal8')} />
                                    <Label check>204</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Salón 301', 'Salón de Clases', 'CCO4 - Segunda Planta', 'sal9')} />
                                    <Label check>301</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Salón 303', 'Salón de Clases', 'CCO4 - Segunda Planta', 'sal10')} />
                                    <Label check>303</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Salón 304', 'Salón de Clases', 'CCO4 - Segunda Planta', 'sal11')} />
                                    <Label check>304</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Salón 305', 'Salón de Clases', 'CCO4 - Segunda Planta', 'sal12')} />
                                    <Label check>305</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Salón 307', 'Salón de Clases', 'CCO4 - Segunda Planta', 'sal13')} />
                                    <Label check>307</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Salón 308', 'Salón de Clases', 'CCO4 - Segunda Planta', 'sal14')} />
                                    <Label check>308</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Salón 401', 'Salón de Clases', 'CCO4 - Tercer Planta', 'sal15')} />
                                    <Label check>401</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Salón 402', 'Salón de Clases', 'CCO4 - Tercer Planta', 'sal16')} />
                                    <Label check>402</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Salón 403', 'Salón de Clases', 'CCO4 - Tercer Planta', 'sal17')} />
                                    <Label check>403</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Salón 404', 'Salón de Clases', 'CCO4 - Tercer Planta', 'sal18')} />
                                    <Label check>404</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO5" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO5(event, 'Salón 201', 'Salón de Clases', 'CCO5 - Primera Planta', 'sal1')} />
                                    <Label check>201</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO5(event, 'Salón 202', 'Salón de Clases', 'CCO5 - Primera Planta', 'sal2')} />
                                    <Label check>202</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO5(event, 'Salón 203', 'Salón de Clases', 'CCO5 - Primera Planta', 'sal3')} />
                                    <Label check>203</Label>
                                 </FormGroup>
                              </Form>
                           </SubMenu>
                        </MenuItem>
                     </SubMenu>

                     <SubMenu label="Laboratorios" style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                        <MenuItem className='d-flex justify-content-center' style={{ height: 'auto' }}>
                           <SubMenu label="CCO2" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, 'Multimedia', 'Laboratorio', 'CCO2 - Primera Planta', 'lab1')} />
                                    <Label check>201</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, 'Multimedia', 'Laboratorio', 'CCO2 - Primera Planta', 'lab2')} />
                                    <Label check>202</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, 'Servicios de Red', 'Laboratorio', 'CCO2 - Primera Planta', 'lab3')} />
                                    <Label check>203</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, 'Aztli', 'Laboratorio', 'CCO2 - Primera Planta', 'lab4')} />
                                    <Label check>204</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, 'SL', 'Laboratorio', 'CCO2 - Primera Planta', 'lab5')} />
                                    <Label check>205</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, 'Arquitectura', 'Laboratorio', 'CCO2 - Primera Planta', 'lab6')} />
                                    <Label check>206</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, 'Bases de Datos', 'Laboratorio', 'CCO2 - Primera Planta', 'lab7')} />
                                    <Label check>207</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, 'Educación Continua', 'Laboratorio', 'CCO2 - Primera Planta', 'lab8')} />
                                    <Label check>208</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, 'Robótica Móvil', 'Laboratorio', 'CCO2 - Segunda Planta', 'lab9')} />
                                    <Label check>302</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox'onChange={(event) => marcadorCCO2(event, 'MiniLab', 'Laboratorio', 'CCO2 - Segunda Planta', 'lab10')} />
                                    <Label check>303</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox'onChange={(event) => marcadorCCO2(event, 'DT', 'Laboratorio', 'CCO2 - Segunda Planta', 'lab9')} />
                                    <Label check>304</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO3" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'Cómputo 101', 'Laboratorio', 'CCO3 - Planta Baja', 'lab1')} />
                                    <Label check>101</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox'onChange={(event) => marcadorCCO3(event, 'Cómputo 104', 'Laboratorio', 'CCO3 - Planta Baja', 'lab2')} />
                                    <Label check>104</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'Cómputo 109', 'Laboratorio', 'CCO3 - Planta Baja', 'lab3')} />
                                    <Label check>109</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'Cómputo 114', 'Laboratorio', 'CCO3 - Planta Baja', 'lab4')} />
                                    <Label check>114</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'Tecgs. de Info.', 'Laboratorio', 'CCO3 - Primera Planta', 'lab5')} />
                                    <Label check>201</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'TS', 'Laboratorio', 'CCO3 - Primera Planta', 'lab6')} />
                                    <Label check>204</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'Sistemas Robóticos', 'Laboratorio', 'CCO3 - Primera Planta', 'lab7')} />
                                    <Label check>205</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'Redes', 'Laboratorio', 'CCO3 - Segunda Planta', 'lab8')} />
                                    <Label check>301</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'Redes-1', 'Laboratorio', 'CCO3 - Segunda Planta', 'lab9')} />
                                    <Label check>302</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'Redes-2', 'Laboratorio', 'CCO3 - Segunda Planta', 'lab10')} />
                                    <Label check>303</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'Hardware 309', 'Laboratorio', 'CCO3 - Segunda Planta', 'lab11')} />
                                    <Label check>309</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'Hardware 310', 'Laboratorio', 'CCO3 - Segunda Planta', 'lab12')} />
                                    <Label check>310</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'Almacén', 'Laboratorio', 'CCO3 - Segunda Planta', 'lab13')} />
                                    <Label check>310A</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO4" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'iLab', 'Laboratorio', 'CCO4 - Primera Planta', 'lab1')} />
                                    <Label check>206</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Certificaciones', 'Laboratorio', 'CCO4 - Segunda Planta', 'lab2')} />
                                    <Label check>306</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO5" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO5(event, 'Realidad Virtual', 'Laboratorio', 'CCO5 - Planta Baja', 'lab')} />
                                    <Label check>207</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>
                        </MenuItem>
                     </SubMenu>

                     <SubMenu label="Cubículos" style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                        <MenuItem className='d-flex justify-content-center' style={{ height: 'auto' }}>
                           <SubMenu label="CCO1" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '103', 'Cubículo', 'CCO1 - Planta Baja', 'cubo103')} />
                                    <Label check>103</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '104', 'Cubículo', 'CCO1 - Planta Baja', 'cubo104')} />
                                    <Label check>104</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '105', 'Cubículo', 'CCO1 - Planta Baja', 'cubo105')} />
                                    <Label check>105</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '106', 'Cubículo', 'CCO1 - Planta Baja', 'cubo106')} />
                                    <Label check>106</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '107', 'Cubículo', 'CCO1 - Planta Baja', 'cubo107')} />
                                    <Label check>107</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '108', 'Cubículo', 'CCO1 - Planta Baja', 'cubo108')} />
                                    <Label check>108</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '109', 'Cubículo', 'CCO1 - Planta Baja', 'cubo109')} />
                                    <Label check>109</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '110', 'Cubículo', 'CCO1 - Planta Baja', 'cubo110')} />
                                    <Label check>110</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '111', 'Cubículo', 'CCO1 - Planta Baja', 'cubo111')} />
                                    <Label check>111</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '112', 'Cubículo', 'CCO1 - Planta Baja', 'cubo112')} />
                                    <Label check>112</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '113', 'Cubículo', 'CCO1 - Planta Baja', 'cubo113')} />
                                    <Label check>113</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '114', 'Cubículo', 'CCO1 - Planta Baja', 'cubo114')} />
                                    <Label check>114</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '115', 'Cubículo', 'CCO1 - Planta Baja', 'cubo115')} />
                                    <Label check>115</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '116', 'Cubículo', 'CCO1 - Planta Baja', 'cubo116')} />
                                    <Label check>116</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '117', 'Cubículo', 'CCO1 - Planta Baja', 'cubo117')} />
                                    <Label check>117</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '118', 'Cubículo', 'CCO1 - Planta Baja', 'cubo118')} />
                                    <Label check>118</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '119', 'Cubículo', 'CCO1 - Planta Baja', 'cubo119')} />
                                    <Label check>119</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '120', 'Cubículo', 'CCO1 - Planta Baja', 'cubo120')} />
                                    <Label check>120</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '121', 'Cubículo', 'CCO1 - Planta Baja', 'cubo121')} />
                                    <Label check>121</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '122', 'Cubículo', 'CCO1 - Planta Baja', 'cubo122')} />
                                    <Label check>122</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '123', 'Cubículo', 'CCO1 - Planta Baja', 'cubo123')} />
                                    <Label check>123</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '124', 'Cubículo', 'CCO1 - Planta Baja', 'cubo124')} />
                                    <Label check>124</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, '125', 'Cubículo', 'CCO1 - Planta Baja', 'cubo125')} />
                                    <Label check>125</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO2" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '103', 'Cubículos', 'CCO2 - Planta Baja', 'cubo1')} />
                                    <Label check>103</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '104', 'Cubículos', 'CCO2 - Planta Baja', 'cubo2')} />
                                    <Label check>104</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '106', 'Cubículos', 'CCO2 - Planta Baja', 'cubo3')} />
                                    <Label check>106</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '107', 'Cubículos', 'CCO2 - Planta Baja', 'cubo4')} />
                                    <Label check>107</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '108', 'Cubículos', 'CCO2 - Planta Baja', 'cubo5')} />
                                    <Label check>108</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '109', 'Cubículos', 'CCO2 - Planta Baja', 'cubo6')} />
                                    <Label check>109</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '110', 'Cubículos', 'CCO2 - Planta Baja', 'cubo7')} />
                                    <Label check>110</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '111', 'Cubículos', 'CCO2 - Planta Baja', 'cubo8')} />
                                    <Label check>111</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '112', 'Cubículos', 'CCO2 - Planta Baja', 'cubo9')} />
                                    <Label check>112</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '113', 'Cubículos', 'CCO2 - Planta Baja', 'cubo10')} />
                                    <Label check>113</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '114', 'Cubículos', 'CCO2 - Planta Baja', 'cubo11')} />
                                    <Label check>114</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '209', 'Cubículos', 'CCO2 - Primera Planta', 'cubo12')} />
                                    <Label check>209</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '301', 'Cubículos', 'CCO2 - Segunda Planta', 'cubo13')} />
                                    <Label check>301</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '305-A', 'Cubículos', 'CCO2 - Segunda Planta', 'cubo14')} />
                                    <Label check>305A</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '305-B', 'Cubículos', 'CCO2 - Segunda Planta', 'cubo15')} />
                                    <Label check>305B</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '306', 'Cubículos', 'CCO2 - Segunda Planta', 'cubo16')} />
                                    <Label check>306</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '307', 'Cubículos', 'CCO2 - Segunda Planta', 'cubo17')} />
                                    <Label check>307</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '308', 'Cubículos', 'CCO2 - Segunda Planta', 'cubo18')} />
                                    <Label check>308</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '309', 'Cubículos', 'CCO2 - Segunda Planta', 'cubo19')} />
                                    <Label check>309</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '310', 'Cubículos', 'CCO2 - Segunda Planta', 'cubo20')} />
                                    <Label check>310</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, '311', 'Cubículos', 'CCO2 - Segunda Planta', 'cubo21')} />
                                    <Label check>311</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO3" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '6', 'Cubículo', 'CCO3 - Planta Baja', 'cubo1')} />
                                    <Label check>6</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '7', 'Cubículo', 'CCO3 - Planta Baja', 'cubo2')} />
                                    <Label check>7</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '8', 'Cubículo', 'CCO3 - Planta Baja', 'cubo3')} />
                                    <Label check>8</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '9', 'Cubículo', 'CCO3 - Planta Baja', 'cubo4')} />
                                    <Label check>9</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '10', 'Cubículo', 'CCO3 - Planta Baja', 'cubo5')} />
                                    <Label check>10</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '11', 'Cubículo', 'CCO3 - Planta Baja', 'cubo6')} />
                                    <Label check>11</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '105', 'Cubículo', 'CCO3 - Planta Baja', 'cubo7')} />
                                    <Label check>105</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '106', 'Cubículo', 'CCO3 - Planta Baja', 'cubo8')} />
                                    <Label check>106</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '107', 'Cubículo', 'CCO3 - Planta Baja', 'cubo9')} />
                                    <Label check>107</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '108', 'Cubículo', 'CCO3 - Planta Baja', 'cubo10')} />
                                    <Label check>108</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '102', 'Cubículo', 'CCO3 - Planta Baja', 'cubo11')} />
                                    <Label check>102</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '103', 'Cubículo', 'CCO3 - Planta Baja', 'cubo12')} />
                                    <Label check>103</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '110', 'Cubículo', 'CCO3 - Planta Baja', 'cubo13')} />
                                    <Label check>110</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '111', 'Cubículo', 'CCO3 - Planta Baja', 'cubo14')} />
                                    <Label check>111</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '112', 'Cubículo', 'CCO3 - Planta Baja', 'cubo15')} />
                                    <Label check>112</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '113', 'Cubículo', 'CCO3 - Planta Baja', 'cubo16')} />
                                    <Label check>113</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '203', 'Cubículo', 'CCO3 - Primera Planta', 'cubo17')} />
                                    <Label check>203</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '206', 'Cubículo', 'CCO3 - Primera Planta', 'cubo18')} />
                                    <Label check>206</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '206-B', 'Cubículo', 'CCO3 - Primera Planta', 'cubo19')} />
                                    <Label check>206B</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '207', 'Cubículo', 'CCO3 - Primera Planta', 'cubo20')} />
                                    <Label check>207</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '304', 'Cubículo', 'CCO3 - Segunda Planta', 'cubo21')} />
                                    <Label check>304</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, '308', 'Cubículo', 'CCO3 - Segunda Planta', 'cubo22')} />
                                    <Label check>308</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO4" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, '108', 'Cubículo', 'CCO4 - Planta Baja', 'cubo1')} />
                                    <Label check>108</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, '109', 'Cubículo', 'CCO4 - Planta Baja', 'cubo2')} />
                                    <Label check>109</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, '110', 'Cubículo', 'CCO4 - Planta Baja', 'cubo3')} />
                                    <Label check>110</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, '302', 'Cubículo', 'CCO4 - Segunda Planta', 'cubo4')} />
                                    <Label check>302</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, '302-A', 'Cubículo', 'CCO4 - Segunda Planta', 'cubo5')} />
                                    <Label check>302A</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO5" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO5(event, '101', 'Cubículo', 'CCO5 - Planta Baja', 'cubo1')} />
                                    <Label check>101</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO5(event, '102', 'Cubículo', 'CCO5 - Planta Baja', 'cubo2')} />
                                    <Label check>102</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO5(event, '103', 'Cubículo', 'CCO5 - Planta Baja', 'cubo3')} />
                                    <Label check>103</Label>
                                 </FormGroup>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO5(event, '104', 'Cubículo', 'CCO5 - Planta Baja', 'cubo4')} />
                                    <Label check>104</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO5(event, '106', 'Cubículo', 'CCO5 - Planta Baja', 'cubo5')} />
                                    <Label check>106</Label>
                                 </FormGroup>
                              </Form>
                           </SubMenu>
                        </MenuItem>
                     </SubMenu>

                     <SubMenu label="Puntos de interés" style={{ textAlign: 'center', fontSize: '1.3rem' }}>
                        <MenuItem className='d-flex justify-content-center' style={{ height: 'auto' }}>
                           <SubMenu label="CCO1" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form className='mt-3' style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, 'Unidad Médica FCC', 'Punto de Interés', 'CCO1 - Planta Baja', 'puntomed')} />
                                    <Label check>Unidad Médica</Label>
                                 </FormGroup>
                              </Form>
                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO1(event, 'Autoacceso', 'Punto de Interés', 'CCO1 - Planta Baja', 'puntoauto')} />
                                    <Label check>Autoacceso</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO2" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, 'Comedor', 'Punto de Interés', 'CCO2 - Planta Baja', 'comedor')} />
                                    <Label check>Comedor</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO2(event, 'Auditorio Albert E.', 'Punto de Interés', 'CCO2 - Planta Baja', 'auditorio')} />
                                    <Label check>Auditorio</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO3" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO3(event, 'Biblioteca FCC', 'Punto de Interés', 'CCO3 - Segunda Planta', 'biblioteca')} />
                                    <Label check>Biblioteca</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="CCO4" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox'  onChange={(event) => marcadorCCO4(event, 'Serv. Soc. y P.Ps.', 'Punto de Interés', 'CCO4 - Primera Planta', 'sersoc')} />
                                    <Label check>Servicio Social y Prácticas</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Área Secretarial', 'Punto de Interés', 'CCO4 - Primera Planta', 'secrea')} />
                                    <Label check>Área Secretarial</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Archivo', 'Punto de Interés', 'CCO4 - Primera Planta', 'archivo')} />
                                    <Label check>Archivo</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => marcadorCCO4(event, 'Dirección', 'Punto de Interés', 'CCO4 - Primera Planta', 'direccion')} />
                                    <Label check>Dirección</Label>
                                 </FormGroup>
                              </Form>
                              <hr />
                           </SubMenu>

                           <SubMenu label="Exteriores" style={{ textAlign: 'center', fontSize: '0.8rem' }}>
                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => puntosExteriores(event, 'Cancha Deportiva', 'Punto de Interés', 'Exteriores - Este', 'cancha')} />
                                    <Label check>Cancha Deportiva</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => puntosExteriores(event, 'Cafetería', 'Punto de Interés', 'Exteriores - Noroeste', 'cafe')} />
                                    <Label check>Cafetería</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => puntosExteriores(event, 'Estación de Lobobicis', 'Punto de Interés', 'Exteriores - Sur', 'bicis')} />
                                    <Label check>Estación de Lobobicis</Label>
                                 </FormGroup>
                              </Form>

                              <Form style={{ textAlign: 'center' }}>
                                 <FormGroup check inline>
                                    <Input type='checkbox' onChange={(event) => puntosExteriores(event, 'Parada de Lobobús', 'Punto de Interés', 'Exteriores - Este', 'bus')} />
                                    <Label check>Parada de Lobobús</Label>
                                 </FormGroup>
                              </Form>
                           </SubMenu>
                        </MenuItem>
                     </SubMenu>
                  </Menu>
               </Sidebar>
            </div>

            <div className='Maqueta form-check-inline' style={{ marginRight: '0px', marginLeft: anchoPantalla, display: 'inline-block', overflowX: 'hidden', width: '100%' }}>
               <div className='d-flex'>
                  <Button style={{ backgroundColor: '#b2c0cb', color: '#212529', height: '44px' }} onClick={() => colapsar()}><i className='bi bi-list'></i></Button>
                  <h1 className='d-flex align-items-center justify-content-center' style={{ color: '#eee', width: '100%', height: '70px', fontWeight: 'bolder', fontFamily: 'Paytone One, sans-serif', textShadow: '#00395E 10px 0 20px' }}>Lobo Brújula</h1>

               </div>

               {
                  radio === 1 &&
                  <div className='d-flex justify-content-center align-items-center' style={{ display: 'inline-flex', width: '100%', marginLeft: '5px', height: '90%' }}>
                     <div className='d-flex justify-content-center shadow p-3 mb-5 bg-body rounded' id="mapa" >
                        <MapContainer center={[19.004989, -98.205]} zoom={300} scrollWheelZoom={false} {...mapaEstatico}>
                           <TileLayer
                              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                           />
                           {acceso9}
                           {acceso12}
                           {cco1}
                           {cco2}
                           {cco3}
                           {cco4}
                           {cco5}
                           {sal1}
                           {sal2}
                           {sal3}
                           {sal4}
                           {sal5}
                           {sal6}
                           {cubo1}
                           {cubo2}
                           {cubo3}
                           {cubo4}
                           {cubo5}
                           {cubo6}
                           {cubo7}
                           {cubo8}
                           {cubo9}
                           {cubo10}
                           {cubo11}
                           {cubo12}
                           {cubo13}
                           {cubo14}
                           {cubo15}
                           {cubo16}
                           {cubo17}
                           {cubo18}
                           {cubo19}
                           {cubo20}
                           {cubo21}
                           {cubo22}
                           {cubo23}
                           {punto1}
                           {punto2}
                           {salCco2_1}
                           {cuboCco2_1}
                           {cuboCco2_2}
                           {cuboCco2_3}
                           {cuboCco2_4}
                           {cuboCco2_5}
                           {cuboCco2_6}
                           {cuboCco2_7}
                           {cuboCco2_8}
                           {cuboCco2_9}
                           {cuboCco2_10}
                           {cuboCco2_11}
                           {cuboCco2_12}
                           {cuboCco2_13}
                           {cuboCco2_14}
                           {cuboCco2_15}
                           {cuboCco2_16}
                           {cuboCco2_17}
                           {cuboCco2_18}
                           {cuboCco2_19}
                           {cuboCco2_20}
                           {cuboCco2_21}
                           {cco2Punto1}
                           {cco2Punto2}
                           {cco3Sal1}
                           {cco3Sal2}
                           {cco3Sal3}
                           {cuboCco3_1}
                           {cuboCco3_2}
                           {cuboCco3_3}
                           {cuboCco3_4}
                           {cuboCco3_5}
                           {cuboCco3_6}
                           {cuboCco3_7}
                           {cuboCco3_8}
                           {cuboCco3_9}
                           {cuboCco3_10}
                           {cuboCco3_11}
                           {cuboCco3_12}
                           {cuboCco3_13}
                           {cuboCco3_14}
                           {cuboCco3_15}
                           {cuboCco3_16}
                           {cuboCco3_17}
                           {cuboCco3_18}
                           {cuboCco3_19}
                           {cuboCco3_20}
                           {cuboCco3_21}
                           {cuboCco3_22}
                           {cco3Punto1}
                           {cco4Sal1}
                           {cco4Sal2}
                           {cco4Sal3}
                           {cco4Sal4}
                           {cco4Sal5}
                           {cco4Sal6}
                           {cco4Sal7}
                           {cco4Sal8}
                           {cco4Sal9}
                           {cco4Sal10}
                           {cco4Sal11}
                           {cco4Sal12}
                           {cco4Sal13}
                           {cco4Sal14}
                           {cco4Sal15}
                           {cco4Sal16}
                           {cco4Sal17}
                           {cco4Sal18}
                           {cuboCco4_1}
                           {cuboCco4_2}
                           {cuboCco4_3}
                           {cuboCco4_4}
                           {cuboCco4_5}
                           {cco4Punto1}
                           {cco4Punto2}
                           {cco4Punto3}
                           {cco4Punto4}
                           {cco5Sal1}
                           {cco5Sal2}
                           {cco5Sal3}
                           {cuboCco5_1}
                           {cuboCco5_2}
                           {cuboCco5_3}
                           {cuboCco5_4}
                           {cuboCco5_5}
                           {cco2Lab1}
                           {cco2Lab2}
                           {cco2Lab3}
                           {cco2Lab4}
                           {cco2Lab5}
                           {cco2Lab6}
                           {cco2Lab7}
                           {cco2Lab8}
                           {cco2Lab9}
                           {cco2Lab10}
                           {cco2Lab11}
                           {cco3Lab1}
                           {cco3Lab2}
                           {cco3Lab3}
                           {cco3Lab4}
                           {cco3Lab5}
                           {cco3Lab6}
                           {cco3Lab7}
                           {cco3Lab8}
                           {cco3Lab9}
                           {cco3Lab10}
                           {cco3Lab11}
                           {cco3Lab12}
                           {cco3Lab13}
                           {cco4Lab1}
                           {cco4Lab2}
                           {cco5Lab1}
                           {cancha}
                           {cafe}
                           {bicis}
                           {bus}
                        </MapContainer>
                     </div>
                  </div>
               }
               {
                  radio === 0 &&
                  <div className='d-flex justify-content-center align-items-center' style={{ display: 'inline-flex', width: '100%', marginLeft: '5px', height: '90%' }}>
                     <Canvas
                        camera={{ position: [-20, 3, 5.25], fov: 15 }}
                        style={{
                           backgroundColor: 'rgba(255,255,255,0)'
                        }}
                     >

                        <ambientLight intensity={2.25} />
                        <directionalLight intensity={2} position={[-1, 1, 0]} />
                        <directionalLight intensity={2} position={[5, 3, 0]} />
                        <Suspense fallback={null}>
                           <Model position={[0.025, -0.9, 0]} ids={estado.idslist}>
                           </Model>
                        </Suspense>
                        <OrbitControls />
                     </Canvas>
                  </div>
               }
            </div>
         </div>
         <div className="container" style={{ maxWidth: '100%' }}>
            <footer className="d-flex flex-wrap justify-content-between align-items-center pt-3 fixed-bottom" style={{ marginLeft: anchoPantalla }}>
               <p className="col-md-4 mb-0 text-muted" />

               <div className="d-flex align-items-center justify-content-center flex-column bd-highlight text-decoration-none">
                  <div className="mb-2">
                     <p onClick={toggle} className="mb-0" style={{ fontSize: '17px', color: 'white', fontWeight: 'bolder', textShadow: '1px 1px 1px black,', cursor: 'pointer' }}>Créditos</p>
                  </div>
               </div>

               <p className="col-md-4 mb-0 text-muted" />

            </footer>
         </div>
         <Modal isOpen={modal} toggle={toggle} className="clase_modal" centered>
            <ModalHeader>
               Desarrollado por
            </ModalHeader>
            <ModalBody>
               <li>Díaz Aguilar Raymundo</li>
               <li>Frías Álvarez Juan Antonio</li>
               <li>Jiménez Morales Angelina</li>
               <li>Pérez González Luis Enrique</li>
               <li>Toledo García Jesús Alejandro</li>
            </ModalBody>
            <ModalFooter>
               <Button onClick={toggle} style={{ backgroundColor: '#00395E', borderColor: 'white' }}>Aceptar</Button>
            </ModalFooter>
         </Modal>
      </>
   );
}

export default App;

