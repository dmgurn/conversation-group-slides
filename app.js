(() => {
'use strict';

/* ---------- Content ---------- */
const LESSONS = {"ec1":[{"en":"Introductory Lesson","es":"Lección introductoria"},{"en":"Greetings and Introductions","es":"Saludos y presentaciones"},{"en":"Personal Introduction","es":"Presentación personal"},{"en":"Hobbies and Interests","es":"Aficiones e intereses"},{"en":"Hobbies and Interests","es":"Aficiones e intereses"},{"en":"Family","es":"Familia"},{"en":"Family","es":"Familia"},{"en":"Everyday Common Items","es":"Objetos comunes cotidianos"},{"en":"Clothing and Colors","es":"Ropa y colores"},{"en":"Daily Routines","es":"Rutinas diarias"},{"en":"Current Activities","es":"Actividades actuales"},{"en":"Time and Calendar","es":"Tiempo y calendario"},{"en":"Weather","es":"El clima"},{"en":"Jobs and Careers","es":"Trabajos y carreras profesionales"},{"en":"Jobs and Careers","es":"Trabajos y carreras profesionales"},{"en":"Food","es":"Comida"},{"en":"Food","es":"Comida"},{"en":"Food","es":"Comida"},{"en":"Money","es":"Dinero"},{"en":"Home","es":"El hogar"},{"en":"Home","es":"El hogar"},{"en":"Community","es":"Comunidad"},{"en":"Health","es":"Salud"},{"en":"Health","es":"Salud"},{"en":"Review","es":"Repaso"}],"ec2":[{"en":"Introductory Lesson","es":"Lección introductoria"},{"en":"Introductions","es":"Presentaciones"},{"en":"Interests","es":"Intereses"},{"en":"Family and Friends","es":"Familia y amigos"},{"en":"Family and Friends","es":"Familia y amigos"},{"en":"Feelings and Emotions","es":"Sentimientos y emociones"},{"en":"Interests","es":"Intereses"},{"en":"At Home","es":"En casa"},{"en":"At Home","es":"En casa"},{"en":"Daily Routines","es":"Rutinas diarias"},{"en":"Daily and Weekly Routines","es":"Rutinas diarias y semanales"},{"en":"Past Experiences","es":"Experiencias pasadas"},{"en":"Past Experiences","es":"Experiencias pasadas"},{"en":"Shopping and Food","es":"Compras y comida"},{"en":"Money and Shopping","es":"El dinero y las compras"},{"en":"In the Community","es":"En la comunidad"},{"en":"In the Community","es":"En la comunidad"},{"en":"Holidays","es":"Vacaciones"},{"en":"Going on Vacation","es":"Irse de vacaciones"},{"en":"Health and Sickness","es":"Salud y enfermedad"},{"en":"Health and Sickness","es":"Salud y enfermedad"},{"en":"Special Occasions","es":"Ocasiones especiales"},{"en":"Special Occasions","es":"Ocasiones especiales"},{"en":"Goals and Dreams","es":"Metas y sueños"},{"en":"Review","es":"Repaso"}]};
const META = {"ec1-en-01":[30,"You Are a Child of God",[3,4,9,18,19,21,24,25]],"ec1-en-02":[24,"Exercise Faith in Jesus Christ",[2,3,8,12,14,15,18,19]],"ec1-en-03":[29,"Take Responsibility",[2,3,8,12,17,20,23,24]],"ec1-en-04":[24,"Love and Teach One Another",[2,3,8,12,14,15,18,19]],"ec1-en-05":[27,"Learn by Study and by Faith",[2,3,8,11,15,17,20,22]],"ec1-en-06":[25,"You Are a Child of God",[3,4,8,12,15,16,19,20]],"ec1-en-07":[25,"Exercise Faith in Jesus Christ",[2,3,8,12,15,16,19,20]],"ec1-en-08":[23,"Press Forward",[2,3,8,12,13,14,17,18]],"ec1-en-09":[26,"Counsel with the Lord",[2,3,8,12,14,16,19,21]],"ec1-en-10":[26,"You Are a Child of God",[3,4,9,13,15,17,20,21]],"ec1-en-11":[27,"Exercise Faith in Jesus Christ",[2,3,8,12,16,18,21,22]],"ec1-en-12":[26,"Take Responsibility",[2,3,8,12,14,17,20,21]],"ec1-en-13":[25,"Love and Teach One Another",[2,3,8,12,14,15,18,20]],"ec1-en-14":[24,"You Are a Child of God",[3,4,9,13,14,15,18,19]],"ec1-en-15":[25,"Exercise Faith in Jesus Christ",[2,3,8,12,15,16,19,20]],"ec1-en-16":[25,"Take Responsibility",[2,3,8,12,14,16,19,20]],"ec1-en-17":[26,"Press Forward",[2,3,8,12,15,16,19,21]],"ec1-en-18":[26,"You Are a Child of God",[3,4,9,13,16,17,20,21]],"ec1-en-19":[26,"Exercise Faith in Jesus Christ",[2,3,8,12,14,17,20,21]],"ec1-en-20":[24,"Love and Teach One Another",[2,3,8,12,13,15,18,19]],"ec1-en-21":[23,"Counsel with the Lord",[2,3,7,11,12,13,16,18]],"ec1-en-22":[26,"You Are a Child of God",[2,5,10,14,15,17,20,21]],"ec1-en-23":[23,"Exercise Faith in Jesus Christ",[2,3,7,11,12,14,17,18]],"ec1-en-24":[29,"Press Forward",[2,3,8,12,16,20,23,24]],"ec1-en-25":[23,"Learn by Study and by Faith",[2,3,8,10,12,16,18,19]],"ec1-es-01":[30,"You Are a Child of God",[3,4,9,18,19,21,24,25]],"ec1-es-02":[24,"Exercise Faith in Jesus Christ",[2,3,8,13,-1,15,18,19]],"ec1-es-03":[29,"Take Responsibility",[2,3,8,12,17,20,23,24]],"ec1-es-04":[24,"Love and Teach One Another",[2,3,8,12,14,15,18,19]],"ec1-es-05":[27,"Learn by Study and by Faith",[2,3,8,11,15,17,21,22]],"ec1-es-06":[25,"You Are a Child of God",[3,4,8,12,15,16,19,20]],"ec1-es-07":[25,"Exercise Faith in Jesus Christ",[2,3,8,12,15,16,19,20]],"ec1-es-08":[24,"Press Forward",[2,3,8,12,14,15,18,19]],"ec1-es-09":[26,"Counsel with the Lord",[2,3,8,12,14,16,20,21]],"ec1-es-10":[26,"You Are a Child of God",[3,4,9,13,15,17,20,21]],"ec1-es-11":[27,"Exercise Faith in Jesus Christ",[2,3,8,12,16,18,21,22]],"ec1-es-12":[26,"Take Responsibility",[2,3,8,12,14,17,20,21]],"ec1-es-13":[25,"Love and Teach One Another",[2,3,8,12,14,15,19,20]],"ec1-es-14":[24,"You Are a Child of God",[3,4,9,13,14,15,18,19]],"ec1-es-15":[24,"Exercise Faith in Jesus Christ",[2,3,8,12,14,15,18,19]],"ec1-es-16":[25,"Take Responsibility",[2,3,8,12,15,16,19,20]],"ec1-es-17":[26,"Press Forward",[2,3,8,13,-1,16,20,21]],"ec1-es-18":[26,"You Are a Child of God",[3,4,9,13,16,17,20,21]],"ec1-es-19":[26,"Exercise Faith in Jesus Christ",[2,3,8,12,14,17,20,21]],"ec1-es-20":[24,"Love and Teach One Another",[2,3,8,12,13,15,18,19]],"ec1-es-21":[24,"Counsel with the Lord",[2,3,7,11,12,14,18,19]],"ec1-es-22":[24,"You Are a Child of God",[3,4,9,13,14,15,18,19]],"ec1-es-23":[23,"Exercise Faith in Jesus Christ",[2,3,7,11,12,14,17,18]],"ec1-es-24":[29,"Press Forward",[2,3,8,12,16,20,23,24]],"ec1-es-25":[23,"Learn by Study and by Faith",[2,3,8,10,12,16,18,19]],"ec2-en-01":[30,"You Are a Child of God",[3,4,9,18,19,21,24,25]],"ec2-en-02":[24,"Exercise Faith in Jesus Christ",[2,3,8,12,14,15,18,19]],"ec2-en-03":[25,"Take Responsibility",[2,3,8,12,15,16,19,20]],"ec2-en-04":[27,"Love and Teach One Another",[2,3,8,12,15,18,21,22]],"ec2-en-05":[25,"Learn by Study and by Faith",[2,3,8,12,14,15,18,19]],"ec2-en-06":[24,"You Are a Child of God",[3,4,8,12,13,15,18,19]],"ec2-en-07":[24,"Exercise Faith in Jesus Christ",[2,3,8,12,13,15,18,19]],"ec2-en-08":[26,"Press Forward",[2,3,8,12,15,17,20,21]],"ec2-en-09":[26,"Counsel with the Lord",[2,3,8,12,14,16,19,20]],"ec2-en-10":[25,"You Are a Child of God",[3,4,9,13,15,16,19,20]],"ec2-en-11":[24,"Exercise Faith in Jesus Christ",[2,3,8,12,14,15,18,19]],"ec2-en-12":[25,"Take Responsibility",[2,3,8,12,15,16,19,20]],"ec2-en-13":[28,"Love and Teach One Another",[2,3,8,12,14,18,21,22]],"ec2-en-14":[25,"You Are a Child of God",[3,4,9,13,14,16,19,20]],"ec2-en-15":[27,"Exercise Faith in Jesus Christ",[2,3,8,12,15,18,21,22]],"ec2-en-16":[24,"Take Responsibility",[2,3,8,12,14,15,18,19]],"ec2-en-17":[28,"Press Forward",[2,3,8,12,15,18,21,22]],"ec2-en-18":[25,"You Are a Child of God",[3,4,9,13,15,16,19,20]],"ec2-en-19":[24,"Exercise Faith in Jesus Christ",[2,3,8,12,14,15,18,19]],"ec2-en-20":[24,"Love and Teach One Another",[2,3,8,12,14,15,18,19]],"ec2-en-21":[26,"Counsel with the Lord",[2,3,7,11,13,16,19,20]],"ec2-en-22":[27,"You Are a Child of God",[3,4,9,13,16,18,21,22]],"ec2-en-23":[22,"Exercise Faith in Jesus Christ",[2,3,7,11,12,13,16,17]],"ec2-en-24":[24,"Press Forward",[2,3,8,12,14,15,18,19]],"ec2-en-25":[24,"Learn by Study and by Faith",[2,3,8,11,14,18,-1,20]],"ec2-es-01":[30,"You Are a Child of God",[3,4,9,18,19,21,24,25]],"ec2-es-02":[24,"Exercise Faith in Jesus Christ",[2,3,8,12,14,15,19,20]],"ec2-es-03":[25,"Take Responsibility",[2,3,8,12,15,16,20,21]],"ec2-es-04":[29,"Love and Teach One Another",[2,3,8,12,18,20,23,24]],"ec2-es-05":[25,"Learn by Study and by Faith",[2,3,8,12,14,15,19,20]],"ec2-es-06":[25,"You Are a Child of God",[3,4,8,12,14,16,19,20]],"ec2-es-07":[25,"Exercise Faith in Jesus Christ",[2,3,8,12,14,16,19,20]],"ec2-es-08":[26,"Press Forward",[2,3,8,12,15,17,20,21]],"ec2-es-09":[26,"Counsel with the Lord",[2,3,8,12,14,16,20,21]],"ec2-es-10":[25,"You Are a Child of God",[3,4,9,13,15,16,19,20]],"ec2-es-11":[24,"Exercise Faith in Jesus Christ",[2,3,8,12,14,15,18,19]],"ec2-es-12":[25,"Take Responsibility",[2,3,8,12,15,16,19,20]],"ec2-es-13":[28,"Love and Teach One Another",[2,3,8,12,14,18,22,23]],"ec2-es-14":[25,"You Are a Child of God",[3,4,9,13,14,16,19,20]],"ec2-es-15":[27,"Exercise Faith in Jesus Christ",[2,3,8,12,16,18,21,22]],"ec2-es-16":[24,"Take Responsibility",[2,3,8,12,14,15,18,19]],"ec2-es-17":[28,"Press Forward",[2,3,8,12,15,18,22,23]],"ec2-es-18":[25,"You Are a Child of God",[3,4,9,13,14,16,18,20]],"ec2-es-19":[24,"Exercise Faith in Jesus Christ",[2,3,8,12,14,15,17,19]],"ec2-es-20":[24,"Love and Teach One Another",[2,3,8,12,14,15,17,19]],"ec2-es-21":[26,"Counsel with the Lord",[2,3,7,11,13,16,18,21]],"ec2-es-22":[27,"You Are a Child of God",[3,4,9,13,16,18,21,22]],"ec2-es-23":[22,"Exercise Faith in Jesus Christ",[2,3,7,11,12,13,16,17]],"ec2-es-24":[24,"Press Forward",[2,3,8,12,14,15,18,19]],"ec2-es-25":[24,"Learn by Study and by Faith",[2,3,8,11,14,17,19,20]]};          // key -> [slideCount, principle, [prayer, principle, a1, a2, a3, evaluate, faith, closing]] (-1 = not found)
const PAIRS = {"ec1-en-01":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"ec1-es-01":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"ec1-en-02":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec1-es-02":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec1-en-03":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],"ec1-es-03":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],"ec1-en-04":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec1-es-04":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec1-en-05":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"ec1-es-05":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"ec1-en-06":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec1-es-06":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec1-en-07":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec1-es-07":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec1-en-08":[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23],"ec1-es-08":[0,1,2,3,4,5,6,7,8,9,10,11,11,12,13,14,15,16,17,18,19,20,21,22],"ec1-en-09":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-es-09":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-en-10":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-es-10":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-en-11":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"ec1-es-11":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"ec1-en-12":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-es-12":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-en-13":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec1-es-13":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec1-en-14":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec1-es-14":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec1-en-15":[0,1,2,3,4,5,6,7,8,9,10,11,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec1-es-15":[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24],"ec1-en-16":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec1-es-16":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec1-en-17":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-es-17":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-en-18":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-es-18":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-en-19":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-es-19":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-en-20":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec1-es-20":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec1-en-21":[0,1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21,22,23],"ec1-es-21":[0,1,2,3,4,5,6,7,8,9,10,11,12,12,13,14,15,16,17,18,19,20,21,22],"ec1-en-22":[0,1,1,2,3,4,5,6,7,8,9,10,11,12,13,13,14,15,16,17,18,19,20,21,22,23],"ec1-es-22":[0,1,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,23,24,25],"ec1-en-23":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],"ec1-es-23":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],"ec1-en-24":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],"ec1-es-24":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],"ec1-en-25":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],"ec1-es-25":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],"ec2-en-01":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"ec2-es-01":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"ec2-en-02":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,21,22,23],"ec2-es-02":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,17,18,19,20,22,23],"ec2-en-03":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21,22,22,23,24],"ec2-es-03":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,18,19,20,21,23,24],"ec2-en-04":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,19,20,21,22,23,24,25,26,27,28],"ec2-es-04":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,14,15,16,16,17,18,19,20,21,22,23,24,25,26],"ec2-en-05":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,22,23,24],"ec2-es-05":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,16,17,18,19,20,21,23,24],"ec2-en-06":[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24],"ec2-es-06":[0,1,2,3,4,5,6,7,8,9,10,11,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-en-07":[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24],"ec2-es-07":[0,1,2,3,4,5,6,7,8,9,10,11,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-en-08":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec2-es-08":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec2-en-09":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,23,23,24,25],"ec2-es-09":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,17,18,19,20,21,22,24,25],"ec2-en-10":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec2-es-10":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec2-en-11":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-es-11":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-en-12":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec2-es-12":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec2-en-13":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,25,25,26,27],"ec2-es-13":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,19,20,21,22,23,24,26,27],"ec2-en-14":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec2-es-14":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec2-en-15":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"ec2-es-15":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"ec2-en-16":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-es-16":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-en-17":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,25,25,26,27],"ec2-es-17":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,19,20,21,22,23,24,26,27],"ec2-en-18":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec2-es-18":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec2-en-19":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-es-19":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-en-20":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-es-20":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-en-21":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,23,24,25],"ec2-es-21":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,20,21,22,24,25],"ec2-en-22":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"ec2-es-22":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"ec2-en-23":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],"ec2-es-23":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],"ec2-en-24":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-es-24":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-en-25":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-es-25":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]};        // key -> for each slide, the matching slide index in the other language's deck
const UNITS = [[1,5],[6,9],[10,13],[14,17],[18,21],[22,25]];
const SECTION_SHORT = ['Prayer','Principle','Activity 1','Activity 2','Activity 3','Evaluate','Act in faith','Closing'];
const PEN_COLORS = [['#15171C','Black'],['#1F55D6','Blue'],['#D7322B','Red'],['#178A4A','Green'],['#FFFFFF','White']];
const HL_COLORS = [['#FFE14D','Yellow'],['#7DF0A0','Green'],['#FF94DA','Pink'],['#84D6FF','Blue']];
const SIZES = { pen:[2.2,3.6,6.5], hl:[14,22,34] };   // thousandths of the page width, at 1x zoom
const SIZE_DOTS = [5,8,12];
const Q = 4000;                                        // stored coordinate scale
const ASPECT = 16/9;
const APP_VERSION = 'Version 4 · October 28, 2026';
const GAP = 16;                                        // space between slides when scrolling continuously
const MAXZ = 4;
const ALL_KEYS = [];
for (const c of ['ec1','ec2']) for (const l of ['en','es']) for (let n = 1; n <= 25; n++) ALL_KEYS.push(`${c}-${l}-${String(n).padStart(2,'0')}`);

const $ = (s, r = document) => r.querySelector(s);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
function h(tag, attrs, ...kids){
  const e = document.createElement(tag);
  if (attrs) for (const [k, v] of Object.entries(attrs)){
    if (v == null || v === false) continue;
    if (k === 'class') e.className = v;
    else if (k === 'text') e.textContent = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
    else if (k === 'style') e.style.cssText = v;
    else e.setAttribute(k, v === true ? '' : v);
  }
  for (const k of kids) if (k != null) e.append(k);
  return e;
}
function icon(id){ const s = document.createElementNS('http://www.w3.org/2000/svg','svg'); s.setAttribute('class','i'); const u = document.createElementNS('http://www.w3.org/2000/svg','use'); u.setAttribute('href','#i-'+id); s.append(u); return s; }

/* ---------- Per-device preferences ---------- */
function lsGet(k, d){ try { const v = localStorage.getItem('cgs:' + k); return v == null ? d : JSON.parse(v); } catch { return d; } }
function lsSet(k, v){ try { localStorage.setItem('cgs:' + k, JSON.stringify(v)); return true; } catch { return false; } }
const prefs = Object.assign({course:'ec1', lang:'en', tool:'pen', penColor:0, hlColor:0, penSize:1, hlSize:1, fingerDraw:true, sawPen:false, scroll:false}, lsGet('prefs', {}) || {});
const savePrefs = () => lsSet('prefs', prefs);

function lessonKey(course, lang, num){ return `${course}-${lang}-${String(num).padStart(2,'0')}`; }
function info(key){
  const m = /^(ec[12])-(en|es)-(\d\d)$/.exec(key || ''); if (!m) return null;
  const num = +m[3], l = LESSONS[m[1]][num - 1], meta = META[key];
  if (!l || !meta) return null;
  return { key, course:m[1], lang:m[2], num, title: m[2] === 'es' ? l.es : l.en, n:meta[0], principle:meta[1], sections:meta[2] };
}
const otherLangKey = key => key.replace(/-(en|es)-/, (_, l) => l === 'en' ? '-es-' : '-en-');
const courseLabel = c => c === 'ec1' ? 'EnglishConnect 1' : 'EnglishConnect 2';

/* ---------- On-device storage (IndexedDB): slides and marks ---------- */
const DB = (() => {
  let dbp = null;
  function open(){
    if (dbp) return dbp;
    dbp = new Promise((res, rej) => {
      const r = indexedDB.open('conversation-group-slides', 1);
      r.onupgradeneeded = () => {
        const d = r.result;
        if (!d.objectStoreNames.contains('slides')) d.createObjectStore('slides');
        if (!d.objectStoreNames.contains('docs')) d.createObjectStore('docs');
      };
      r.onsuccess = () => res(r.result);
      r.onerror = () => { dbp = null; rej(r.error); };
    });
    return dbp;
  }
  async function run(store, mode, fn){
    const d = await open();
    return new Promise((res, rej) => {
      const t = d.transaction(store, mode), s = t.objectStore(store);
      let out; const req = fn(s);
      if (req) req.onsuccess = () => { out = req.result; };
      t.oncomplete = () => res(out);
      t.onerror = () => rej(t.error);
      t.onabort = () => rej(t.error || new Error('aborted'));
    });
  }
  return {
    get: (st, k) => run(st, 'readonly', s => s.get(k)),
    put: (st, k, v) => run(st, 'readwrite', s => s.put(v, k)),
    del: (st, k) => run(st, 'readwrite', s => s.delete(k)),
    keys: st => run(st, 'readonly', s => s.getAllKeys()),
    all: st => run(st, 'readonly', s => s.getAll()),
    range: (st, lo, hi) => run(st, 'readonly', s => s.getAll(IDBKeyRange.bound(lo, hi)))
  };
})();

const Store = {
  async loadLesson(key){
    const out = { ink:{}, meta:null };
    const docs = await DB.range('docs', key + '_', key + '_￿');
    for (const v of docs){
      if (!v) continue;
      if (v.kind === 'ink' && Array.isArray(v.s)) out.ink[v.page] = Array.from(v.s);
      else if (v.kind === 'meta') out.meta = v;
    }
    return out;
  },
  async listMeta(){
    const map = {};
    try { for (const v of await DB.all('docs')) if (v && v.kind === 'meta' && v.lesson) map[v.lesson] = v; } catch {}
    return map;
  },
  async write(id, data){ if (data) await DB.put('docs', id, data); else await DB.del('docs', id); }
};

/* One write at a time per record, coalesced after a short pause. */
const Saver = {
  timers: new Map(), getters: new Map(), busy: new Set(), queued: new Map(), errors: 0,
  schedule(id, get, delay = 500){
    clearTimeout(this.timers.get(id));
    this.getters.set(id, get);
    this.timers.set(id, setTimeout(() => { this.timers.delete(id); this.getters.delete(id); this.flush(id, get()); }, delay));
    setSave('saving');
  },
  flushNow(){
    for (const [id, t] of [...this.timers]){ clearTimeout(t); const g = this.getters.get(id); this.timers.delete(id); this.getters.delete(id); if (g) this.flush(id, g()); }
  },
  async flush(id, data){
    if (this.busy.has(id)){ this.queued.set(id, data); return; }
    this.busy.add(id);
    try { await Store.write(id, data); this.errors = 0; }
    catch (e) { this.errors++; }
    finally {
      this.busy.delete(id);
      if (this.queued.has(id)){ const d = this.queued.get(id); this.queued.delete(id); this.flush(id, d); }
      else if (!this.timers.size && !this.busy.size) setSave(this.errors ? 'error' : 'idle');
    }
  }
};
function setSave(state){
  const dot = $('#saveDot'), txt = $('#saveText');
  let label;
  if (state === 'saving'){ label = 'Saving…'; dot.dataset.state = 'saving'; }
  else if (state === 'error'){ label = 'Your last change did not save. This iPad may be low on storage. Free up some space, then draw again.'; dot.dataset.state = 'error'; }
  else { label = 'Saved on this iPad. Use “Back up my marks” on the lessons screen to keep a copy.'; dot.dataset.state = 'cloud'; }
  dot.title = label; txt.textContent = label;
}

/* ---------- App state ---------- */
const S = { key:null, info:null, n:0, boards:0, page:0, ink:{}, hist:{ u:[], r:[] }, view:'library', have:new Set() };
const pk = (i = S.page) => i < S.n ? 's' + i : 'b' + (i - S.n);
const pkIndex = k => k[0] === 's' ? +k.slice(1) : S.n + +k.slice(1);
const total = () => S.n + S.boards;
const strokesFor = k => (S.ink[k] ||= []);
const continuous = () => !!prefs.scroll;
const presenting = () => document.body.classList.contains('presenting');

/* ---------- Library ---------- */
let libMeta = {};
function renderLibrary(){
  for (const b of document.querySelectorAll('[data-course]')) b.setAttribute('aria-pressed', b.dataset.course === prefs.course);
  for (const b of document.querySelectorAll('[data-lang]')) b.setAttribute('aria-pressed', b.dataset.lang === prefs.lang);

  const haveCount = ALL_KEYS.filter(k => S.have.has(k)).length;
  $('#importCard').hidden = haveCount >= ALL_KEYS.length;
  $('#haveLine').textContent = haveCount >= ALL_KEYS.length
    ? 'All 100 lessons are on this iPad and work without internet.'
    : `${haveCount} of 100 lessons are on this iPad.`;

  const last = Object.values(libMeta).filter(m => m && info(m.lesson) && S.have.has(m.lesson)).sort((a, b) => (b.at || 0) - (a.at || 0))[0];
  const cont = $('#continue');
  if (last){
    const li = info(last.lesson);
    const page = (last.last || 0);
    const where = page < li.n ? `Slide ${page + 1} of ${li.n}` : `Board page ${page - li.n + 1}`;
    cont.replaceChildren(
      h('span', {style:'display:grid;gap:2px;min-width:0'},
        h('span', {class:'c-label', text:'Pick up where you left off'}),
        h('span', {class:'c-title', text:`${li.course === 'ec1' ? 'EC1' : 'EC2'} · Lesson ${li.num} · ${li.title}`}),
        h('span', {class:'c-sub', text:`${li.lang === 'es' ? 'Spanish' : 'English'} slides · ${where}`})),
      h('span', {class:'c-go'}, icon('next')));
    cont.onclick = () => openLesson(li.key, page);
    cont.hidden = false;
  } else cont.hidden = true;

  const units = UNITS.map(([a, b], ui) => {
    const cards = [];
    for (let n = a; n <= b; n++){
      const key = lessonKey(prefs.course, prefs.lang, n), li = info(key), m = libMeta[key];
      const has = S.have.has(key);
      const inked = m && Array.isArray(m.inked) ? m.inked.length : 0;
      cards.push(h('button', {type:'button', class:'card' + (has ? '' : ' missing'), onclick: () => has ? openLesson(key) : needSlides()},
        h('span', {class:'top'}, h('span', {class:'num', text: String(n).padStart(2,'0')}), h('span', {class:'count', text:`${li.n} slides`})),
        h('span', {class:'title', text: li.title}),
        li.principle ? h('span', {class:'pl', text: li.principle}) : h('span'),
        h('span', {class:'notes', text: !has ? 'Slides not added yet' : inked ? `Your marks on ${inked} page${inked === 1 ? '' : 's'}` : ''})));
    }
    return h('section', {class:'unit'}, h('h2', null, `Unit ${ui + 1}`, h('span', {text:`Lessons ${a}–${b}`})), h('div', {class:'grid c' + cards.length}, ...cards));
  });
  $('#shelf').replaceChildren(...units);
}
function needSlides(){
  const c = $('#importCard');
  c.hidden = false; c.scrollIntoView({ behavior:'smooth', block:'center' });
  c.classList.remove('flash'); void c.offsetWidth; c.classList.add('flash');
}
async function refreshLibrary(){
  try { S.have = new Set(await DB.keys('slides')); } catch { S.have = new Set(); }
  const fresh = await Store.listMeta();
  for (const [k, v] of Object.entries(libMeta)) if (!fresh[k] || (fresh[k].at || 0) < (v.at || 0)) fresh[k] = v;
  libMeta = fresh;
  if (S.view === 'library') renderLibrary();
}
for (const b of document.querySelectorAll('[data-course]')) b.addEventListener('click', () => { prefs.course = b.dataset.course; savePrefs(); renderLibrary(); });
for (const b of document.querySelectorAll('[data-lang]')) b.addEventListener('click', () => { prefs.lang = b.dataset.lang; savePrefs(); renderLibrary(); });

/* ---------- Importing slides (a .zip of PDFs, or the PDFs themselves) ---------- */
function keyFromName(name){
  const base = String(name).split('/').pop();
  if (!base || base.startsWith('._')) return null;
  const m = /EC\s*([12])\s*[-_ ]\s*(EN|ES)\s*[-_ ]\s*L?\s*(\d{1,2})(?!\d)/i.exec(base);
  if (!m) return null;
  const n = +m[3]; if (n < 1 || n > 25) return null;
  return lessonKey('ec' + m[1], m[2].toLowerCase(), n);
}
async function* zipEntries(file){
  const size = file.size, tailLen = Math.min(size, 65557);
  const tail = new DataView(await file.slice(size - tailLen).arrayBuffer());
  let eocd = -1;
  for (let i = tailLen - 22; i >= 0; i--) if (tail.getUint32(i, true) === 0x06054b50){ eocd = i; break; }
  if (eocd < 0) throw new Error('This file is not a zip archive.');
  const count = tail.getUint16(eocd + 10, true), cdSize = tail.getUint32(eocd + 12, true), cdOff = tail.getUint32(eocd + 16, true);
  if (count === 0xFFFF || cdOff === 0xFFFFFFFF) throw new Error('This zip is too large to read. Choose the PDFs instead.');
  const cd = new DataView(await file.slice(cdOff, cdOff + cdSize).arrayBuffer());
  const dec = new TextDecoder();
  let p = 0;
  for (let n = 0; n < count && p + 46 <= cd.byteLength; n++){
    if (cd.getUint32(p, true) !== 0x02014b50) break;
    const method = cd.getUint16(p + 10, true), comp = cd.getUint32(p + 20, true);
    const nameLen = cd.getUint16(p + 28, true), extraLen = cd.getUint16(p + 30, true), commentLen = cd.getUint16(p + 32, true);
    const lho = cd.getUint32(p + 42, true);
    const name = dec.decode(new Uint8Array(cd.buffer, cd.byteOffset + p + 46, nameLen));
    p += 46 + nameLen + extraLen + commentLen;
    yield { name, method, comp, lho };
  }
}
async function zipEntryBlob(file, e){
  const lh = new DataView(await file.slice(e.lho, e.lho + 30).arrayBuffer());
  if (lh.getUint32(0, true) !== 0x04034b50) throw new Error('bad entry');
  const start = e.lho + 30 + lh.getUint16(26, true) + lh.getUint16(28, true);
  const raw = file.slice(start, start + e.comp);
  if (e.method === 0) return raw;
  if (e.method === 8 && 'DecompressionStream' in window) return await new Response(raw.stream().pipeThrough(new DecompressionStream('deflate-raw'))).blob();
  throw new Error('unsupported compression');
}
async function importFiles(files){
  const prog = $('#importProgress'), bar = $('#importBar'), btns = document.querySelectorAll('.pick');
  for (const b of btns) b.disabled = true;
  prog.hidden = false; bar.style.width = '0%';
  const say = t => { $('#importText').textContent = t; };
  try { if (navigator.storage && navigator.storage.persist) await navigator.storage.persist(); } catch {}
  const items = []; let skipped = 0, failed = 0;
  say('Reading your file…');
  for (const f of files){
    if (/\.zip$/i.test(f.name) || /zip/.test(f.type)){
      try {
        for await (const e of zipEntries(f)){
          if (e.name.startsWith('__MACOSX/') || !/\.pdf$/i.test(e.name)) continue;
          const key = keyFromName(e.name);
          if (key) items.push({ key, get: () => zipEntryBlob(f, e) }); else skipped++;
        }
      } catch (err) { say(err && err.message ? err.message : 'That zip file could not be read.'); failed++; }
    } else if (/\.pdf$/i.test(f.name) || f.type === 'application/pdf'){
      const key = keyFromName(f.name);
      if (key) items.push({ key, get: async () => f }); else skipped++;
    } else skipped++;
  }
  let done = 0, added = 0;
  for (const it of items){
    try {
      const blob = await it.get();
      const buf = await blob.arrayBuffer();
      if (String.fromCharCode(...new Uint8Array(buf, 0, 5)) !== '%PDF-'){ failed++; }
      else { await DB.put('slides', it.key, new Blob([buf], { type:'application/pdf' })); added++; }
    } catch (err) { failed++; }
    done++;
    bar.style.width = Math.round(done / items.length * 100) + '%';
    say(`Adding lessons… ${done} of ${items.length}`);
  }
  await refreshLibrary();
  renderLibrary();
  for (const b of btns) b.disabled = false;
  const parts = [];
  if (added) parts.push(`Added ${added} lesson${added === 1 ? '' : 's'}.`);
  if (skipped) parts.push(`${skipped} file${skipped === 1 ? ' was' : 's were'} not recognized as lesson slides.`);
  if (failed) parts.push(`${failed} could not be read.`);
  if (!items.length && !failed) parts.push('No lesson slides were found. Choose “EnglishConnect Slides for iPad.zip” or PDFs named like “EC1 EN L08 - Everyday Common Items.pdf”.');
  say(parts.join(' '));
  if (added) toast(parts[0]);
}
$('#pickFile').addEventListener('change', e => { const fs = Array.from(e.target.files || []); e.target.value = ''; if (fs.length) importFiles(fs); });
for (const b of document.querySelectorAll('.pick')) b.addEventListener('click', () => $('#pickFile').click());

/* ---------- Backing up and restoring marks ---------- */
$('#backupBtn').addEventListener('click', async () => {
  try {
    const entries = [];
    for (const v of await DB.all('docs')){
      if (!v) continue;
      entries.push({ id: v.kind === 'meta' ? v.lesson + '_meta' : v.lesson + '_' + v.page, data: v });
    }
    if (!entries.length){ toast('There are no marks to back up yet.'); return; }
    const name = `conversation-group-marks-${new Date().toISOString().slice(0, 10)}.json`;
    const blob = new Blob([JSON.stringify({ app:'conversation-group-slides', version:1, at:Date.now(), docs:entries })], { type:'application/json' });
    const file = new File([blob], name, { type:'application/json' });
    if (navigator.canShare && navigator.canShare({ files:[file] })){
      try { await navigator.share({ files:[file], title:'Conversation Group Slides marks' }); return; }
      catch (e) { if (e && e.name === 'AbortError') return; }
    }
    const a = h('a', { href: URL.createObjectURL(blob), download: name });
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  } catch { toast('The backup could not be made.'); }
});
$('#restoreBtn').addEventListener('click', () => $('#pickBackup').click());
$('#pickBackup').addEventListener('change', async e => {
  const f = e.target.files && e.target.files[0]; e.target.value = '';
  if (!f) return;
  try {
    const j = JSON.parse(await f.text());
    if (!j || j.app !== 'conversation-group-slides' || !Array.isArray(j.docs)) throw new Error('bad');
    let n = 0;
    for (const d of j.docs){
      if (!d || typeof d.id !== 'string' || !d.data || !/^ec[12]-(en|es)-\d\d_(meta|s\d+|b\d+)$/.test(d.id)) continue;
      await DB.put('docs', d.id, d.data); n++;
    }
    await refreshLibrary();
    toast(`Restored marks from ${n} saved page${n === 1 ? '' : 's'}.`);
  } catch { toast('That file is not a Conversation Group Slides backup.'); }
});

/* ---------- PDF ---------- */
const pdfjs = window.pdfjsLib;
if (pdfjs) pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
let pdfDoc = null, pdfKey = null, pdfLoading = null;
const pageCache = new Map();   // "i@w" -> canvas, the slide at fitted size
const thumbCache = new Map();  // i -> canvas
const inflight = new Map();
let chain = Promise.resolve();
function enqueue(fn){ const p = chain.then(fn, fn); chain = p.catch(() => {}); return p; }
async function loadPdf(key){
  if (pdfDoc && pdfKey === key) return pdfDoc;
  if (pdfLoading && pdfLoading.key === key) return pdfLoading.p;
  if (!pdfjs) throw new Error('viewer');
  const old = pdfDoc; pdfDoc = null; pdfKey = null;
  pageCache.clear(); thumbCache.clear(); inflight.clear(); crispCache = null;
  if (old) old.destroy().catch(() => {});
  const p = (async () => {
    const blob = await DB.get('slides', key);
    if (!blob){ const e = new Error('missing'); e.code = 'missing'; throw e; }
    const data = new Uint8Array(await blob.arrayBuffer());
    const doc = await pdfjs.getDocument({ data, isEvalSupported:false }).promise;
    if (pdfLoading && pdfLoading.key === key){ pdfDoc = doc; pdfKey = key; pdfLoading = null; }
    else doc.destroy().catch(() => {});
    return doc;
  })();
  pdfLoading = { key, p };
  p.catch(() => { if (pdfLoading && pdfLoading.key === key) pdfLoading = null; });
  return p;
}
function renderPdfPage(i, w, opts = {}){
  const queued = opts.queued !== false, keep = opts.keep !== false;
  const ck = i + '@' + w;
  if (keep && pageCache.has(ck)) return Promise.resolve(pageCache.get(ck));
  if (keep && inflight.has(ck)) return inflight.get(ck);
  const doc = pdfDoc, key = pdfKey;
  const run = async () => {
    if (keep && pageCache.has(ck)) return pageCache.get(ck);
    if (!doc || key !== pdfKey) return null;
    const page = await doc.getPage(i + 1);
    const vp0 = page.getViewport({ scale:1 });
    const vp = page.getViewport({ scale: w / vp0.width });
    const c = document.createElement('canvas');
    c.width = Math.round(vp.width); c.height = Math.round(vp.height);
    await page.render({ canvasContext: c.getContext('2d', { alpha:false }), viewport: vp }).promise;
    if (key !== pdfKey) return null;
    if (keep){
      pageCache.set(ck, c);
      while (pageCache.size > 8) pageCache.delete(pageCache.keys().next().value);
    }
    return c;
  };
  const p = (queued ? enqueue(run) : run()).finally(() => { if (keep) inflight.delete(ck); });
  if (keep) inflight.set(ck, p);
  return p;
}

/* ---------- The view: fitted slides, zoom and scrolling ----------
   Slides sit in a "document". Single-slide mode shows one slide; continuous mode stacks every slide
   vertically. The view maps document points to the screen: screen = (V.x + docX·z, V.y + docY·z). */
const stage = $('#stage');
const pdfc = $('#pdfc'), inkc = $('#inkc'), livec = $('#livec');
const pctx = pdfc.getContext('2d'), ictx = inkc.getContext('2d'), lctx = livec.getContext('2d');
const L = { sw:0, sh:0, dpr:1, pw:0, ph:0, pad:8, mode:null };
const V = { z:1, x:0, y:0 };
const baseW = () => Math.round(L.pw * L.dpr);
const pageTop = k => continuous() ? k * (L.ph + GAP) : 0;
const docH = () => continuous() ? Math.max(1, total()) * (L.ph + GAP) - GAP : L.ph;

function layout(force){
  const sw = stage.clientWidth, sh = stage.clientHeight;
  if (sw <= 0 || sh <= 0) return false;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const pad = presenting() ? 0 : 8;
  if (!force && sw === L.sw && sh === L.sh && dpr === L.dpr && pad === L.pad && L.mode === continuous()) return false;
  L.sw = sw; L.sh = sh; L.dpr = dpr; L.pad = pad; L.mode = continuous();
  L.pw = Math.max(1, Math.floor(Math.min(sw - pad * 2, (sh - pad * 2) * ASPECT)));
  L.ph = Math.floor(L.pw / ASPECT);
  for (const c of [pdfc, inkc, livec]){ c.width = Math.round(sw * dpr); c.height = Math.round(sh * dpr); }
  crispCache = null;
  return true;
}
function clampView(){
  const dw = L.pw * V.z, dh = docH() * V.z;
  if (dw <= L.sw) V.x = (L.sw - dw) / 2; else V.x = clamp(V.x, L.sw - dw, 0);
  if (continuous()){
    if (dh <= L.sh - L.pad * 2) V.y = (L.sh - dh) / 2; else V.y = clamp(V.y, L.sh - L.pad - dh, L.pad);
  } else {
    if (dh <= L.sh) V.y = (L.sh - dh) / 2; else V.y = clamp(V.y, L.sh - dh, 0);
  }
}
function viewTo(i){ V.z = 1; V.x = 0; V.y = continuous() ? L.pad - pageTop(i) : 0; clampView(); }
function zoomAt(sx, sy, k){
  const nz = clamp(V.z * k, 1, MAXZ); k = nz / V.z;
  V.x = sx - (sx - V.x) * k; V.y = sy - (sy - V.y) * k; V.z = nz;
  clampView();
}
function panBy(dx, dy){ V.x += dx; V.y += dy; clampView(); }
function pageRect(k){ const d = L.dpr; return { ox: V.x * d, oy: (V.y + pageTop(k) * V.z) * d, W: L.pw * V.z * d, H: L.ph * V.z * d }; }
function visiblePages(){
  if (!continuous()) return S.page < total() ? [S.page] : [];
  const out = [], step = (L.ph + GAP) * V.z;
  for (let k = Math.max(0, Math.floor(-V.y / step)); k < total(); k++){
    const top = V.y + pageTop(k) * V.z;
    if (top > L.sh) break;
    if (top + L.ph * V.z >= 0) out.push(k);
  }
  return out;
}
function pageAt(clientX, clientY){
  const r = stage.getBoundingClientRect(), sx = clientX - r.left, sy = clientY - r.top;
  for (const k of visiblePages()){
    const top = V.y + pageTop(k) * V.z, w = L.pw * V.z, hh = L.ph * V.z;
    if (sx >= V.x && sx <= V.x + w && sy >= top && sy <= top + hh) return k;
  }
  return -1;
}
function syncCurrentPage(){
  if (!continuous() || !total()) return;
  // Keep the current slide while it is fully on screen; otherwise it is the one under the upper third.
  const top = V.y + pageTop(S.page) * V.z;
  if (S.page >= 0 && S.page < total() && top >= -1 && top + L.ph * V.z <= L.sh + 1) return;
  const step = (L.ph + GAP) * V.z;
  const k = clamp(Math.floor((L.sh * 0.35 - V.y) / step), 0, total() - 1);
  if (k !== S.page){ S.page = k; updateRails(); scheduleMeta(); prefetch(); }
}

/* ---------- Drawing the view ---------- */
let drawRAF = 0;
function requestDraw(){ if (!drawRAF) drawRAF = requestAnimationFrame(() => { drawRAF = 0; drawView(); }); }
function drawView(){
  if (S.view !== 'lesson' || !L.pw) return;
  drawPdfLayer(); redrawInk(); syncCurrentPage();
}
function drawBoard(ctx, P){
  ctx.fillStyle = '#FFFFFF'; ctx.fillRect(P.ox, P.oy, P.W, P.H);
  const step = P.W / 32, r = Math.max(1, P.W / 900);
  ctx.fillStyle = '#D5DBE5';
  for (let y = step; y < P.H; y += step){
    const yy = P.oy + y; if (yy < -r || yy > ctx.canvas.height + r) continue;
    for (let x = step; x < P.W; x += step){ ctx.beginPath(); ctx.arc(P.ox + x, yy, r, 0, Math.PI * 2); ctx.fill(); }
  }
}
let crispCache = null, crispTimer = 0, crispTok = 0, crispTask = null;
const viewKey = () => [S.key, continuous() ? 'c' : S.page, Math.round(V.x), Math.round(V.y), Math.round(V.z * 1000), L.sw, L.sh, L.dpr, total()].join(',');
function drawPdfLayer(){
  const d = L.dpr;
  pctx.setTransform(1, 0, 0, 1, 0, 0); pctx.clearRect(0, 0, pdfc.width, pdfc.height);
  for (const k of visiblePages()){
    const P = pageRect(k);
    pctx.save();
    if (!presenting()){ pctx.shadowColor = 'rgba(0,0,0,.28)'; pctx.shadowBlur = 24 * d; pctx.shadowOffsetY = 6 * d; }
    pctx.fillStyle = '#FFFFFF'; pctx.fillRect(P.ox, P.oy, P.W, P.H);
    pctx.restore();
    if (k >= S.n){ drawBoard(pctx, P); continue; }
    const base = pageCache.get(k + '@' + baseW());
    if (base) pctx.drawImage(base, P.ox, P.oy, P.W, P.H);
    else if (pdfDoc) renderPdfPage(k, baseW(), { queued:false }).then(c => { if (c) requestDraw(); }).catch(() => {});
  }
  if (crispCache && crispCache.key === viewKey()){ for (const p of crispCache.parts) pctx.drawImage(p.c, p.x, p.y); }
  else scheduleCrisp();
}
/* When zoomed in, re-render just the visible part of each slide at full sharpness once movement stops. */
function scheduleCrisp(){
  clearTimeout(crispTimer);
  if (crispTask){ try { crispTask.cancel(); } catch {} crispTask = null; }
  crispTok++;
  if (V.z < 1.02 || !pdfDoc) return;
  crispTimer = setTimeout(renderCrisp, 170);
}
async function renderCrisp(){
  const key = viewKey(), tok = ++crispTok, doc = pdfDoc;
  const parts = [];
  for (const k of visiblePages()){
    if (k >= S.n) continue;
    const P = pageRect(k);
    const x0 = Math.max(0, Math.floor(P.ox)), y0 = Math.max(0, Math.floor(P.oy));
    const x1 = Math.min(pdfc.width, Math.ceil(P.ox + P.W)), y1 = Math.min(pdfc.height, Math.ceil(P.oy + P.H));
    if (x1 <= x0 || y1 <= y0) continue;
    let page;
    try { page = await doc.getPage(k + 1); } catch { return; }
    if (tok !== crispTok) return;
    const vp0 = page.getViewport({ scale:1 });
    const vp = page.getViewport({ scale: P.W / vp0.width, offsetX: P.ox - x0, offsetY: P.oy - y0 });
    const c = document.createElement('canvas'); c.width = x1 - x0; c.height = y1 - y0;
    crispTask = page.render({ canvasContext: c.getContext('2d', { alpha:false }), viewport: vp });
    try { await crispTask.promise; } catch { return; }
    if (tok !== crispTok || key !== viewKey()) return;
    parts.push({ x:x0, y:y0, c });
  }
  crispTask = null;
  if (key !== viewKey()) return;
  crispCache = { key, parts };
  drawPdfLayer();
}
function prefetch(){
  if (!pdfDoc) return;
  for (const j of [S.page + 1, S.page - 1, S.page + 2]) if (j >= 0 && j < S.n) renderPdfPage(j, baseW()).catch(() => {});
}
new ResizeObserver(() => { if (S.view === 'lesson' && layout()){ viewTo(S.page); drawView(); } }).observe(stage);

/* ---------- Ink drawing ---------- */
const penWidth = (base, p) => base * (0.5 + p / 9);
function drawStroke(ctx, s, W, H, boost = 1){
  const d = s.d, n = d.length / 3; if (!n) return;
  const sx = W / Q, sy = H / Q, base = s.w / 1000 * W * boost;
  ctx.save();
  ctx.strokeStyle = s.c; ctx.fillStyle = s.c; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  if (s.t === 'h'){
    ctx.globalAlpha = 0.36; ctx.lineWidth = base;
    ctx.beginPath(); ctx.moveTo(d[0] * sx, d[1] * sy);
    if (n === 1) ctx.lineTo(d[0] * sx + 0.1, d[1] * sy);
    else if (n === 2) ctx.lineTo(d[3] * sx, d[4] * sy);
    else {
      for (let k = 1; k < n - 1; k++){
        const x = d[k*3] * sx, y = d[k*3+1] * sy, nx = d[k*3+3] * sx, ny = d[k*3+4] * sy;
        ctx.quadraticCurveTo(x, y, (x + nx) / 2, (y + ny) / 2);
      }
      ctx.lineTo(d[(n-1)*3] * sx, d[(n-1)*3+1] * sy);
    }
    ctx.stroke(); ctx.restore(); return;
  }
  if (n === 1){ ctx.beginPath(); ctx.arc(d[0] * sx, d[1] * sy, penWidth(base, d[2]) / 2, 0, Math.PI * 2); ctx.fill(); ctx.restore(); return; }
  let px = d[0] * sx, py = d[1] * sy, pw = penWidth(base, d[2]), mx = px, my = py;
  for (let k = 1; k < n; k++){
    const x = d[k*3] * sx, y = d[k*3+1] * sy, w = penWidth(base, d[k*3+2]);
    const nmx = (px + x) / 2, nmy = (py + y) / 2;
    ctx.lineWidth = (pw + w) / 2;
    ctx.beginPath(); ctx.moveTo(mx, my); ctx.quadraticCurveTo(px, py, nmx, nmy); ctx.stroke();
    mx = nmx; my = nmy; px = x; py = y; pw = w;
  }
  ctx.lineWidth = pw; ctx.beginPath(); ctx.moveTo(mx, my); ctx.lineTo(px, py); ctx.stroke();
  ctx.restore();
}
function inkOnPage(ctx, k, list){
  const P = pageRect(k);
  ctx.save(); ctx.beginPath(); ctx.rect(P.ox, P.oy, P.W, P.H); ctx.clip(); ctx.translate(P.ox, P.oy);
  for (const s of list) drawStroke(ctx, s, P.W, P.H);
  ctx.restore();
}
function redrawInk(){
  ictx.setTransform(1, 0, 0, 1, 0, 0); ictx.clearRect(0, 0, inkc.width, inkc.height);
  for (const k of visiblePages()){ const arr = S.ink[pk(k)]; if (arr && arr.length) inkOnPage(ictx, k, arr); }
}

/* ---------- Pointer input ---------- */
let act = null;
function normOn(k, e){
  const r = act ? act.R : stage.getBoundingClientRect();
  const top = V.y + pageTop(k) * V.z;
  return [((e.clientX - r.left) - V.x) / (L.pw * V.z), ((e.clientY - r.top) - top) / (L.ph * V.z)];
}
function pressureLevel(pr){ if (!pr) return 5; return clamp(Math.round(Math.min(1, Math.pow(pr, 0.8) * 1.4) * 9), 1, 9); }
function currentColor(){ return prefs.tool === 'hl' ? HL_COLORS[prefs.hlColor][0] : PEN_COLORS[prefs.penColor][0]; }
function currentSize(){ return prefs.tool === 'hl' ? SIZES.hl[prefs.hlSize] : SIZES.pen[prefs.penSize]; }

function startAction(e){
  const R = stage.getBoundingClientRect();
  const tool = prefs.tool;
  const sx = e.clientX - R.left, sy = e.clientY - R.top;
  if (tool === 'laser'){
    act = { id:e.pointerId, ptype:e.pointerType, tool, R, cx:e.clientX, cy:e.clientY, last:[sx, sy] };
    laserAdd(sx, sy); return true;
  }
  const k = pageAt(e.clientX, e.clientY);
  if (k < 0) return false;
  act = { id:e.pointerId, ptype:e.pointerType, tool, R, page:k, P:pageRect(k), erased:[], cx:e.clientX, cy:e.clientY, last:[sx, sy] };
  if (tool === 'pen' || tool === 'hl'){
    act.stroke = { t: tool === 'pen' ? 'p' : 'h', c: currentColor(), w: Math.round(currentSize() / V.z * 100) / 100, d: [] };
    addPoint(e);
  } else if (tool === 'eraser'){ eraseLine(sx, sy, sx, sy); eraserCursor(sx, sy); }
  return true;
}
function addPoint(e){
  const s = act.stroke, d = s.d, P = act.P;
  const [x, y] = normOn(act.page, e);
  const X = Math.round(clamp(x, 0, 1) * Q), Y = Math.round(clamp(y, 0, 1) * Q);
  if (d.length){
    const dx = (X - d[d.length - 3]) / Q * P.W / L.dpr, dy = (Y - d[d.length - 2]) / Q * P.H / L.dpr;
    if (dx * dx + dy * dy < 0.64) return;
  }
  d.push(X, Y, e.pointerType === 'pen' ? pressureLevel(e.pressure) : 5);
  if (s.t === 'h'){ lctx.clearRect(0, 0, livec.width, livec.height); inkOnPage(lctx, act.page, [s]); return; }
  const sx = P.W / Q, sy = P.H / Q, base = s.w / 1000 * P.W, k = d.length / 3;
  const px = P.ox + d[(k-1)*3] * sx, py = P.oy + d[(k-1)*3+1] * sy, w = penWidth(base, d[(k-1)*3+2]);
  lctx.strokeStyle = s.c; lctx.fillStyle = s.c; lctx.lineCap = 'round'; lctx.lineJoin = 'round';
  if (k === 1){ act.seg = { mx:px, my:py, px, py, pw:w }; lctx.beginPath(); lctx.arc(px, py, w / 2, 0, Math.PI * 2); lctx.fill(); return; }
  const g = act.seg, nmx = (g.px + px) / 2, nmy = (g.py + py) / 2;
  lctx.lineWidth = (g.pw + w) / 2;
  lctx.beginPath(); lctx.moveTo(g.mx, g.my); lctx.quadraticCurveTo(g.px, g.py, nmx, nmy); lctx.stroke();
  act.seg = { mx:nmx, my:nmy, px, py, pw:w };
}
function moveAction(e){
  const evs = (e.getCoalescedEvents && e.getCoalescedEvents().length) ? e.getCoalescedEvents() : [e];
  act.cx = e.clientX; act.cy = e.clientY;
  if (act.tool === 'pen' || act.tool === 'hl'){ for (const ev of evs) addPoint(ev); return; }
  const sx = e.clientX - act.R.left, sy = e.clientY - act.R.top;
  if (act.tool === 'eraser'){ eraseLine(act.last[0], act.last[1], sx, sy); eraserCursor(sx, sy); }
  else if (act.tool === 'laser'){ for (const ev of evs) laserAdd(ev.clientX - act.R.left, ev.clientY - act.R.top); }
  act.last = [sx, sy];
}
function endAction(cancel){
  const a = act; act = null;
  if (!a) return;
  if (a.tool === 'pen' || a.tool === 'hl'){
    lctx.clearRect(0, 0, livec.width, livec.height);
    if (!cancel && a.stroke.d.length >= 3){
      const key = pk(a.page);
      strokesFor(key).push(a.stroke);
      pushOp({ a:'add', p:key, s:a.stroke });
      redrawInk();
      inkChanged(key);
    }
  } else if (a.tool === 'eraser'){
    lctx.clearRect(0, 0, livec.width, livec.height);
    if (a.erased.length){
      pushOp({ a:'erase', items:a.erased });
      for (const key of new Set(a.erased.map(it => it[0]))) inkChanged(key);
    }
  }
}

function segDist2(px, py, ax, ay, bx, by){
  const dx = bx - ax, dy = by - ay, len = dx * dx + dy * dy;
  let t = len ? ((px - ax) * dx + (py - ay) * dy) / len : 0; t = clamp(t, 0, 1);
  const qx = ax + t * dx - px, qy = ay + t * dy - py; return qx * qx + qy * qy;
}
function hitStroke(s, px, py, r, W, H){
  const d = s.d, sx = W / Q, sy = H / Q, rr = r + s.w / 1000 * W * 0.6, r2 = rr * rr;
  let ax = d[0] * sx, ay = d[1] * sy;
  if (d.length === 3) return (ax - px) ** 2 + (ay - py) ** 2 <= r2;
  for (let k = 3; k < d.length; k += 3){
    const bx = d[k] * sx, by = d[k+1] * sy;
    if (segDist2(px, py, ax, ay, bx, by) <= r2) return true;
    ax = bx; ay = by;
  }
  return false;
}
const eraserR = () => Math.max(9, L.pw * 0.012);
/* Erase along a line in stage coordinates, across whichever slides it passes over. */
function eraseLine(x0, y0, x1, y1){
  const r = eraserR(), steps = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / (r / 2)));
  const w = L.pw * V.z, hh = L.ph * V.z;
  let removed = false;
  for (let k = 0; k <= steps; k++){
    const sx = x0 + (x1 - x0) * k / steps, sy = y0 + (y1 - y0) * k / steps;
    for (const pg of visiblePages()){
      const top = V.y + pageTop(pg) * V.z;
      if (sx < V.x - r || sx > V.x + w + r || sy < top - r || sy > top + hh + r) continue;
      const key = pk(pg), arr = S.ink[key]; if (!arr || !arr.length) continue;
      const px = sx - V.x, py = sy - top;
      for (let i = arr.length - 1; i >= 0; i--){
        if (hitStroke(arr[i], px, py, r, w, hh)){ act.erased.push([key, i, arr[i]]); arr.splice(i, 1); removed = true; }
      }
    }
  }
  if (removed) redrawInk();
}
function eraserCursor(sx, sy){
  lctx.clearRect(0, 0, livec.width, livec.height);
  const d = L.dpr, r = eraserR() * d;
  lctx.save(); lctx.lineWidth = 1.5 * d; lctx.strokeStyle = 'rgba(20,28,51,.7)'; lctx.fillStyle = 'rgba(255,255,255,.35)';
  lctx.beginPath(); lctx.arc(sx * d, sy * d, r, 0, Math.PI * 2); lctx.fill(); lctx.stroke(); lctx.restore();
}

/* Laser pointer: a fading red trail in screen space, never saved. */
let laser = [], laserRAF = 0;
function laserAdd(x, y){ laser.push({ x, y, t: performance.now() }); if (!laserRAF) laserRAF = requestAnimationFrame(laserTick); }
function laserTick(now){
  laserRAF = 0;
  const life = 650, d = L.dpr;
  laser = laser.filter(p => now - p.t < life);
  lctx.clearRect(0, 0, livec.width, livec.height);
  const lw = Math.max(3, L.pw * d * 0.0055);
  lctx.save(); lctx.lineCap = 'round'; lctx.lineJoin = 'round';
  lctx.shadowColor = 'rgba(255,40,30,.9)'; lctx.shadowBlur = lw * 2.2;
  for (let k = 1; k < laser.length; k++){
    const a = laser[k-1], b = laser[k], al = Math.max(0, 1 - (now - b.t) / life);
    lctx.strokeStyle = `rgba(255,59,48,${al.toFixed(3)})`; lctx.lineWidth = lw * (0.4 + 0.6 * al);
    lctx.beginPath(); lctx.moveTo(a.x * d, a.y * d); lctx.lineTo(b.x * d, b.y * d); lctx.stroke();
  }
  if (act && act.tool === 'laser'){
    const [x, y] = act.last;
    lctx.fillStyle = '#FF3B30'; lctx.shadowBlur = lw * 4;
    lctx.beginPath(); lctx.arc(x * d, y * d, lw * 1.4, 0, Math.PI * 2); lctx.fill();
    lctx.fillStyle = '#FFE3E0'; lctx.shadowBlur = 0;
    lctx.beginPath(); lctx.arc(x * d, y * d, lw * 0.55, 0, Math.PI * 2); lctx.fill();
  }
  lctx.restore();
  if (laser.length || (act && act.tool === 'laser')) laserRAF = requestAnimationFrame(laserTick);
  else lctx.clearRect(0, 0, livec.width, livec.height);
}
function stopLaser(){ laser = []; if (laserRAF){ cancelAnimationFrame(laserRAF); laserRAF = 0; } lctx.clearRect(0, 0, livec.width, livec.height); }

/* ---------- Finger gestures: pinch to zoom, drag to pan or scroll, swipe to turn, taps ---------- */
const touches = new Map(); let gesture = null, lastPenAt = 0, momentum = 0;
const mid = (a, b) => ({ x:(a.x + b.x) / 2, y:(a.y + b.y) / 2 });
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y) || 1;
function stopMomentum(){ if (momentum){ cancelAnimationFrame(momentum); momentum = 0; } }
function startMomentum(vx, vy){
  vx *= 16; vy *= 16;
  if (Math.hypot(vx, vy) < 2) return;
  const step = () => {
    vx *= 0.94; vy *= 0.94;
    const bx = V.x, by = V.y; panBy(vx, vy); drawView();
    if (Math.hypot(vx, vy) > 0.4 && (V.x !== bx || V.y !== by)) momentum = requestAnimationFrame(step); else momentum = 0;
  };
  momentum = requestAnimationFrame(step);
}
function newGesture(){ return { t0: performance.now(), max:0, moved:false, invalid:false, mode:null, vx:0, vy:0, lt: performance.now() }; }
function touchDown(e){
  stopMomentum();
  touches.set(e.pointerId, { x0:e.clientX, y0:e.clientY, x:e.clientX, y:e.clientY });
  if (!gesture) gesture = newGesture();
  gesture.max = Math.max(gesture.max, touches.size);
  // A touch that lands while the pencil is writing (a resting palm) never moves anything.
  // iPadOS already rejects most palms on its own, so finger size is not used here.
  if ((act && act.ptype === 'pen') || performance.now() - lastPenAt < 400) gesture.invalid = true;
  if (touches.size === 2 && !gesture.invalid){
    const [a, b] = [...touches.values()];
    gesture.mode = 'pinch'; gesture.mid = mid(a, b); gesture.dist = dist(a, b);
  }
}
function touchMove(e){
  const t = touches.get(e.pointerId); if (!t || !gesture) return;
  const px = t.x, py = t.y; t.x = e.clientX; t.y = e.clientY;
  if (gesture.invalid) return;
  if (Math.hypot(t.x - t.x0, t.y - t.y0) > 10) gesture.moved = true;
  if (gesture.mode === 'pinch' && touches.size >= 2){
    const [a, b] = [...touches.values()], m = mid(a, b), dd = dist(a, b), r = stage.getBoundingClientRect();
    zoomAt(m.x - r.left, m.y - r.top, dd / gesture.dist);
    panBy(m.x - gesture.mid.x, m.y - gesture.mid.y);
    gesture.mid = m; gesture.dist = dd;
    requestDraw(); return;
  }
  if (touches.size === 1 && !gesture.mode && gesture.moved) gesture.mode = (continuous() || V.z > 1.02) ? 'pan' : 'swipe';
  if (gesture.mode === 'pan' && touches.size === 1){
    const dx = t.x - px, dy = t.y - py, now = performance.now(), dt = Math.max(1, now - gesture.lt);
    panBy(dx, dy); requestDraw();
    gesture.vx = 0.7 * gesture.vx + 0.3 * (dx / dt); gesture.vy = 0.7 * gesture.vy + 0.3 * (dy / dt); gesture.lt = now;
  }
}
function touchUp(e){
  const t = touches.get(e.pointerId); if (!t) return;
  touches.delete(e.pointerId);
  if (touches.size){ if (gesture && gesture.mode === 'pinch') gesture.mode = 'pinched'; return; }
  const g = gesture; gesture = null; if (!g || g.invalid) return;
  const dt = performance.now() - g.t0;
  if (g.mode === 'pinch' || g.mode === 'pinched'){ if (g.max === 2 && !g.moved && dt < 400) undo(); requestDraw(); return; }
  if (g.mode === 'pan'){ if (performance.now() - g.lt < 80) startMomentum(g.vx, g.vy); return; }
  if (g.mode === 'swipe'){
    const dx = t.x - t.x0, dy = t.y - t.y0;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4 && dt < 800) goto(S.page + (dx < 0 ? 1 : -1));
    return;
  }
  if (g.max === 1 && !g.moved && dt < 300) handleTap();
}
let lastTap = 0, tapTimer = 0;
function handleTap(){
  const now = performance.now();
  if (now - lastTap < 320){ clearTimeout(tapTimer); lastTap = 0; if (V.z > 1.02) fitZoom(); return; }
  lastTap = now;
  if (presenting()) tapTimer = setTimeout(toggleMini, 280);
}
function fitZoom(){
  const r = stage.getBoundingClientRect();
  zoomAt(L.sw / 2, L.sh / 2, 1 / V.z);
  if (!continuous()) viewTo(S.page);
  void r; requestDraw();
}

stage.addEventListener('pointerdown', e => {
  if (S.view !== 'lesson' || e.target.closest('#stageMsg')) return;
  closePanels();
  stopMomentum();
  if (e.pointerType === 'pen') lastPenAt = performance.now();
  if (e.pointerType === 'pen' && !prefs.sawPen){
    prefs.sawPen = true;
    if (prefs.fingerDraw){ prefs.fingerDraw = false; updateMenu(); toast('Apple Pencil found. Fingers now scroll, swipe and pinch, and a two-finger tap undoes.'); }
    savePrefs();
  }
  const draws = e.pointerType === 'pen' || e.pointerType === 'mouse' || (e.pointerType === 'touch' && prefs.fingerDraw && !presenting());
  if (!draws){ touchDown(e); try { stage.setPointerCapture(e.pointerId); } catch {} return; }
  if (act){
    // A second finger while a finger is drawing turns the touch into a pinch.
    if (act.ptype === 'touch' && e.pointerType === 'touch'){
      const first = { id: act.id, x: act.cx, y: act.cy };
      endAction(true);
      touches.clear(); gesture = newGesture();
      touches.set(first.id, { x0:first.x, y0:first.y, x:first.x, y:first.y }); gesture.max = 1; gesture.moved = true;
      touchDown(e);
    }
    return;
  }
  if (e.pointerType === 'mouse' && e.button !== 0) return;
  if (!startAction(e)) return;
  e.preventDefault();
  try { stage.setPointerCapture(e.pointerId); } catch {}
});
stage.addEventListener('pointermove', e => {
  if (e.pointerType === 'pen' && e.buttons) lastPenAt = performance.now();
  if (act && e.pointerId === act.id){ e.preventDefault(); moveAction(e); }
  else if (touches.has(e.pointerId)) touchMove(e);
  else if (e.pointerType === 'mouse' && presenting() && e.clientY - stage.getBoundingClientRect().top < 56) showMini();
});
const upHandler = cancel => e => {
  if (e.pointerType === 'pen') lastPenAt = performance.now();
  if (act && e.pointerId === act.id) endAction(false);
  else if (touches.has(e.pointerId)){ if (cancel){ touches.delete(e.pointerId); if (!touches.size) gesture = null; } else touchUp(e); }
};
stage.addEventListener('pointerup', upHandler(false));
stage.addEventListener('pointercancel', upHandler(true));
// If a finger lifts outside the slide area, still finish its gesture.
window.addEventListener('pointerup', e => { if (touches.has(e.pointerId)) touchUp(e); });
window.addEventListener('pointercancel', e => { if (touches.has(e.pointerId)){ touches.delete(e.pointerId); if (!touches.size) gesture = null; } });
stage.addEventListener('lostpointercapture', e => { if (act && e.pointerId === act.id) endAction(false); });
stage.addEventListener('contextmenu', e => e.preventDefault());
stage.addEventListener('wheel', e => {
  if (S.view !== 'lesson') return;
  e.preventDefault(); stopMomentum();
  const r = stage.getBoundingClientRect();
  if (e.ctrlKey) zoomAt(e.clientX - r.left, e.clientY - r.top, Math.exp(-e.deltaY * 0.01));
  else if (continuous() || V.z > 1.02) panBy(-e.deltaX, -e.deltaY);
  else return;
  requestDraw();
}, { passive:false });
// Safari's own pinch gesture events would zoom the whole page; the slides handle pinching instead.
for (const ev of ['gesturestart', 'gesturechange', 'gestureend']) document.addEventListener(ev, e => e.preventDefault(), { passive:false });

/* ---------- Undo / redo (for the whole lesson) ---------- */
function pushOp(op){ const hh = S.hist; hh.u.push(op); if (hh.u.length > 400) hh.u.shift(); hh.r.length = 0; updateUndo(); }
function opPages(op){ return op.a === 'erase' ? [...new Set(op.items.map(it => it[0]))] : [op.p]; }
function reveal(op){
  const idx = pkIndex(opPages(op)[0]);
  if (idx >= 0 && idx < total() && !visiblePages().includes(idx)) goto(idx);
}
function undo(){
  const op = S.hist.u.pop(); if (!op) return;
  reveal(op);
  if (op.a === 'add'){ const arr = strokesFor(op.p), i = arr.lastIndexOf(op.s); if (i >= 0) arr.splice(i, 1); }
  else if (op.a === 'erase'){ for (let k = op.items.length - 1; k >= 0; k--){ const [key, i, s] = op.items[k]; const arr = strokesFor(key); arr.splice(Math.min(i, arr.length), 0, s); } }
  else if (op.a === 'clear'){ const arr = strokesFor(op.p); arr.splice(0, arr.length, ...op.items); }
  S.hist.r.push(op); redrawInk(); for (const key of opPages(op)) inkChanged(key); updateUndo();
}
function redo(){
  const op = S.hist.r.pop(); if (!op) return;
  reveal(op);
  if (op.a === 'add') strokesFor(op.p).push(op.s);
  else if (op.a === 'erase'){ for (const [key, i, s] of op.items){ const arr = strokesFor(key); const j = arr.indexOf(s); if (j >= 0) arr.splice(j, 1); else if (arr[i] === s) arr.splice(i, 1); } }
  else if (op.a === 'clear') strokesFor(op.p).length = 0;
  S.hist.u.push(op); redrawInk(); for (const key of opPages(op)) inkChanged(key); updateUndo();
}
function updateUndo(){
  for (const b of document.querySelectorAll('.undo')) b.disabled = !S.hist.u.length;
  for (const b of document.querySelectorAll('.redo')) b.disabled = !S.hist.r.length;
}

/* ---------- Saving ---------- */
function inkChanged(page){
  const key = S.key, arr = strokesFor(page);
  Saver.schedule(key + '_' + page, () => arr.length ? { kind:'ink', lesson:key, page, s:arr, at:Date.now() } : null);
  scheduleMeta();
  const i = pkIndex(page), th = document.querySelector(`.th[data-i="${i}"]`); if (th) drawThumbInk(th, i);
}
function scheduleMeta(){
  if (!S.key) return;
  const data = { kind:'meta', lesson:S.key, boards:S.boards, last:S.page, n:S.n,
                 inked: Object.keys(S.ink).filter(k => S.ink[k] && S.ink[k].length), at:Date.now() };
  libMeta[S.key] = data;
  Saver.schedule(S.key + '_meta', () => data, 900);
}

/* ---------- Navigation ---------- */
function goto(i){
  if (!S.key) return;
  i = clamp(i, 0, Math.max(0, total() - 1));
  const changed = i !== S.page;
  if (act) endAction(true);
  stopLaser(); stopMomentum();
  S.page = i; crispCache = null;
  viewTo(i);
  drawView(); updateRails(); prefetch();
  if (changed) scheduleMeta();
}
function currentSection(){
  const sec = S.info.sections; let cur = -1;
  for (let k = 0; k < sec.length; k++) if (sec[k] >= 0 && sec[k] <= S.page) cur = k;
  return cur;
}
function updateRails(){
  const chips = $('#chips'); const cur = S.page < S.n ? currentSection() : -1;
  const list = [];
  S.info.sections.forEach((start, k) => {
    if (start < 0 || start >= S.n) return;
    list.push(h('button', {type:'button', class:'chip', 'aria-current': String(k === cur), onclick: () => goto(start), text: SECTION_SHORT[k]}));
  });
  for (let b = 0; b < S.boards; b++){
    const i = S.n + b;
    list.push(h('button', {type:'button', class:'chip', 'aria-current': String(S.page === i), onclick: () => goto(i), text: `Board ${b + 1}`}));
  }
  list.push(h('button', {type:'button', class:'chip add', onclick: addBoard, 'aria-label':'Add a blank board page'}, '+ Board'));
  chips.replaceChildren(...list);
  const curChip = chips.querySelector('[aria-current="true"]');
  if (curChip){ const cr = chips.getBoundingClientRect(), r = curChip.getBoundingClientRect(); chips.scrollLeft += (r.left - cr.left) - (cr.width - r.width) / 2; }
  $('#counter').textContent = S.page < S.n ? `${S.page + 1} / ${S.n}` : `Board ${S.page - S.n + 1}`;
  $('#prevBtn').disabled = S.page <= 0; $('#nextBtn').disabled = S.page >= total() - 1;
  resetClear();
  updateUndo();
  for (const th of document.querySelectorAll('.th[data-i]')) th.setAttribute('aria-current', String(+th.dataset.i === S.page));
}
function addBoard(){
  S.boards++; scheduleMeta(); closePanels();
  layout(true);
  goto(S.n + S.boards - 1);
  toast('Blank board page added at the end of this lesson.');
}

/* ---------- Switching between the English and Spanish slides ---------- */
function updateLangButtons(){
  const toEs = S.info && S.info.lang === 'en';
  for (const b of document.querySelectorAll('.langBtn')){
    b.replaceChildren(h('span', {class:'long', text: toEs ? 'Español' : 'English'}), h('span', {class:'short', text: toEs ? 'ES' : 'EN'}));
    b.setAttribute('aria-label', toEs ? 'Show this slide in Spanish' : 'Show this slide in English');
  }
}
function switchLanguage(){
  if (!S.key) return;
  const other = otherLangKey(S.key), oi = info(other);
  if (!oi) return;
  if (!S.have.has(other)){ toast(`The ${oi.lang === 'es' ? 'Spanish' : 'English'} slides for this lesson are not on this iPad yet.`); return; }
  const map = PAIRS[S.key];
  const target = S.page < S.n ? (map && map[S.page] != null ? map[S.page] : S.page) : (oi.n - 1);
  Saver.flushNow();
  openLesson(other, clamp(target, 0, oi.n - 1), { keepLaserless:true });
}
for (const b of document.querySelectorAll('.langBtn')) b.addEventListener('click', switchLanguage);

/* ---------- Tools UI ---------- */
function renderTools(){
  for (const b of document.querySelectorAll('[data-tool]')) b.setAttribute('aria-pressed', String(b.dataset.tool === prefs.tool));
  const t = prefs.tool;
  for (const sw of [$('#swatches'), $('#miniSwatches')]){
    if (t === 'pen' || t === 'hl'){
      const colors = t === 'pen' ? PEN_COLORS : HL_COLORS, sel = t === 'pen' ? prefs.penColor : prefs.hlColor;
      sw.replaceChildren(...colors.map(([c, name], i) => h('button', {type:'button', class:'sw', 'aria-label': name, 'aria-pressed': String(i === sel), style:`--c:${c}`, onclick: () => { if (t === 'pen') prefs.penColor = i; else prefs.hlColor = i; savePrefs(); renderTools(); }}, h('i'))));
      sw.hidden = false;
    } else { sw.replaceChildren(); sw.hidden = true; }
  }
  const sz = $('#sizes');
  if (t === 'pen' || t === 'hl'){
    const ssel = t === 'pen' ? prefs.penSize : prefs.hlSize;
    sz.replaceChildren(...SIZE_DOTS.map((d, i) => h('button', {type:'button', class:'sz', 'aria-label': ['Fine','Medium','Bold'][i], 'aria-pressed': String(i === ssel), style:`--d:${t === 'hl' ? d + 3 : d}px`, onclick: () => { if (t === 'pen') prefs.penSize = i; else prefs.hlSize = i; savePrefs(); renderTools(); }}, h('i'))));
    sz.hidden = false;
  } else { sz.replaceChildren(); sz.hidden = true; }
}
for (const b of document.querySelectorAll('[data-tool]')) b.addEventListener('click', () => { prefs.tool = b.dataset.tool; savePrefs(); renderTools(); });

/* ---------- Present mode: only the slides show, for screen mirroring ---------- */
let miniTimer = 0, presentHinted = false;
function showMini(){ $('#mini').hidden = false; bumpMini(); }
function hideMini(){ $('#mini').hidden = true; clearTimeout(miniTimer); }
function bumpMini(){ clearTimeout(miniTimer); miniTimer = setTimeout(hideMini, 4000); }
function toggleMini(){ $('#mini').hidden ? showMini() : hideMini(); }
$('#mini').addEventListener('pointerdown', bumpMini);
function setPresent(on){
  if (act) endAction(true);
  document.body.classList.toggle('presenting', on);
  closePanels(); hideMini(); stopLaser();
  layout(true); viewTo(S.page); drawView(); updateRails();
  if (on && !presentHinted){ presentHinted = true; toast('Presenting. Tap for tools, swipe or drag to move, pinch to zoom, double-tap to fit.'); }
}
$('#presentBtn').addEventListener('click', () => setPresent(true));
$('#miniDone').addEventListener('click', () => setPresent(false));
$('#miniFit').addEventListener('click', () => { fitZoom(); bumpMini(); });

/* ---------- Thumbnails ---------- */
let thumbIO = null;
function buildThumbs(){
  const box = $('#thumbs');
  if (thumbIO) thumbIO.disconnect();
  thumbIO = new IntersectionObserver(entries => { for (const en of entries) if (en.isIntersecting){ thumbIO.unobserve(en.target); paintThumb(en.target); } }, { root: box, rootMargin:'200px' });
  const items = [];
  for (let i = 0; i < total(); i++){
    const sec = S.info.sections.indexOf(i);
    const label = i < S.n ? `Slide ${i + 1}` : `Board ${i - S.n + 1}`;
    items.push(h('button', {type:'button', class:'th', 'data-i': i, 'aria-current': String(i === S.page), onclick: () => { goto(i); closePanels(); }},
      h('span', {class:'pic'}, h('canvas', {class:'tp'}), h('canvas', {class:'ti'})),
      h('small', null, h('b', {text: label}), sec >= 0 ? ' · ' + SECTION_SHORT[sec] : '')));
  }
  items.push(h('button', {type:'button', class:'th add', onclick: addBoard}, h('span', {class:'pic'}, icon('plus')), h('small', {text:'Add a board page'})));
  box.replaceChildren(...items);
  for (const th of box.querySelectorAll('.th[data-i]')) thumbIO.observe(th);
  const cur = box.querySelector('[aria-current="true"]');
  if (cur){ const br = box.getBoundingClientRect(), r = cur.getBoundingClientRect(); box.scrollTop += (r.top - br.top) - (br.height - r.height) / 2; }
}
async function paintThumb(th){
  const i = +th.dataset.i, tp = th.querySelector('.tp');
  const pic = th.querySelector('.pic'), cw = Math.max(1, Math.round(pic.clientWidth * L.dpr)), ch = Math.round(cw / ASPECT);
  tp.width = cw; tp.height = ch;
  const ctx = tp.getContext('2d');
  if (i >= S.n) drawBoard(ctx, { ox:0, oy:0, W:cw, H:ch });
  else {
    let c = thumbCache.get(i);
    if (!c){ try { c = await renderPdfPage(i, cw, { keep:false }); } catch { c = null; } if (c) thumbCache.set(i, c); }
    if (c) ctx.drawImage(c, 0, 0, cw, ch);
  }
  drawThumbInk(th, i);
}
function drawThumbInk(th, i){
  const ti = th.querySelector('.ti'), tp = th.querySelector('.tp');
  if (!tp.width) return;
  ti.width = tp.width; ti.height = tp.height;
  const ctx = ti.getContext('2d'); ctx.clearRect(0, 0, ti.width, ti.height);
  for (const s of (S.ink[pk(i)] || [])) drawStroke(ctx, s, ti.width, ti.height, 1.8);
}

/* ---------- Panels & menu ---------- */
function closePanels(){ $('#drawer').hidden = true; $('#menu').hidden = true; resetClear(); }
$('#gridBtn').addEventListener('click', () => { const d = $('#drawer'); const open = d.hidden; closePanels(); if (open){ d.hidden = false; buildThumbs(); } });
$('#drawerClose').addEventListener('click', closePanels);
$('#moreBtn').addEventListener('click', () => { const m = $('#menu'); const open = m.hidden; closePanels(); if (open){ updateMenu(); m.hidden = false; } });
$('#mAddBoard').addEventListener('click', addBoard);
function resetClear(){ const b = $('#mClear'); b.dataset.armed = 'false'; $('#mClearLabel').textContent = S.page < S.n ? 'Clear marks on this slide' : 'Clear this board page'; }
$('#mClear').addEventListener('click', () => {
  const b = $('#mClear'), key = pk(), arr = strokesFor(key);
  if (!arr.length){ toast('There are no marks on this page.'); return; }
  if (b.dataset.armed !== 'true'){ b.dataset.armed = 'true'; $('#mClearLabel').textContent = 'Tap again to clear. You can undo this.'; return; }
  pushOp({ a:'clear', p:key, items: arr.slice() }); arr.length = 0; redrawInk(); inkChanged(key); closePanels(); toast('Marks cleared. Tap Undo to bring them back.');
});
function updateMenu(){
  $('#mFinger').setAttribute('aria-checked', String(!!prefs.fingerDraw));
  $('#mFingerSub').textContent = prefs.fingerDraw ? 'On: one finger draws like the pencil. Two fingers pinch and scroll.' : 'Off: fingers scroll, swipe and pinch, and a two-finger tap undoes. Apple Pencil always draws.';
  $('#mScroll').setAttribute('aria-checked', String(continuous()));
  $('#mScrollSub').textContent = continuous() ? 'On: slides are stacked; drag up and down to move through them.' : 'Off: one slide at a time; swipe sideways to turn.';
  setSave(Saver.timers.size || Saver.busy.size ? 'saving' : (Saver.errors ? 'error' : 'idle'));
}
$('#mFinger').addEventListener('click', () => { prefs.fingerDraw = !prefs.fingerDraw; savePrefs(); updateMenu(); });
$('#mScroll').addEventListener('click', () => {
  prefs.scroll = !prefs.scroll; savePrefs(); updateMenu();
  layout(true); viewTo(S.page); drawView(); updateRails();
});

let toastTimer = 0;
function toast(msg){ const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 3800); }
function stageMsg(text, btnLabel, onBtn){
  const m = $('#stageMsg');
  if (!text){ m.hidden = true; m.replaceChildren(); return; }
  m.replaceChildren(h('span', {text}), onBtn ? h('button', {type:'button', onclick: onBtn, text: btnLabel}) : null);
  m.hidden = false;
}

/* ---------- Open / close a lesson ---------- */
let wake = null;
async function keepAwake(){ try { if (navigator.wakeLock && !wake) { wake = await navigator.wakeLock.request('screen'); wake.addEventListener('release', () => { wake = null; }); } } catch { wake = null; } }
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && S.view === 'lesson') keepAwake(); });

async function openLesson(key, page){
  const li = info(key); if (!li){ showLibrary(); return; }
  if (act) endAction(true);
  closePanels(); stopLaser(); stopMomentum();
  S.key = key; S.info = li; S.n = li.n; S.boards = 0; S.page = 0; S.ink = {}; S.hist = { u:[], r:[] };
  S.view = 'lesson';
  $('#library').hidden = true; $('#lesson').hidden = false; document.body.classList.add('in-lesson');
  $('#whereTitle').textContent = `Lesson ${li.num} · ${li.title}`;
  $('#whereSub').textContent = `${courseLabel(li.course)} · ${li.lang === 'es' ? 'Spanish slides' : 'English slides'}${li.principle ? ' · ' + li.principle : ''}`;
  if (location.hash !== '#' + key) history.replaceState(null, '', '#' + key);
  renderTools(); updateRails(); updateLangButtons();
  layout(true); viewTo(0);
  pctx.setTransform(1, 0, 0, 1, 0, 0); pctx.clearRect(0, 0, pdfc.width, pdfc.height); ictx.clearRect(0, 0, inkc.width, inkc.height);
  stageMsg('Opening slides…');
  keepAwake();
  let data, err = null;
  try { [data] = await Promise.all([Store.loadLesson(key), loadPdf(key)]); }
  catch (e) { err = e; }
  if (S.key !== key) return;
  if (err){
    if (err.code === 'missing') stageMsg('This lesson’s slides are not on this iPad yet. Add them from the lessons screen.', 'Go to lessons', () => { showLibrary(); needSlides(); });
    else stageMsg(pdfjs ? 'These slides could not be opened. Try adding this lesson’s PDF again from the lessons screen.' : 'The slide viewer did not load. Close and reopen the app.', 'Go to lessons', showLibrary);
    return;
  }
  stageMsg(null);
  if (pdfDoc && pdfDoc.numPages) S.n = pdfDoc.numPages;
  S.ink = data.ink || {};
  S.boards = Math.max(0, (data.meta && data.meta.boards) || 0);
  const start = page != null ? page : (data.meta && data.meta.last) || 0;
  S.page = -1;
  layout(true);
  goto(start);
}
function showLibrary(){
  if (act) endAction(true);
  if (presenting()) document.body.classList.remove('presenting');
  stopLaser(); stopMomentum(); closePanels(); hideMini();
  S.view = 'library';
  $('#lesson').hidden = true; $('#library').hidden = false; document.body.classList.remove('in-lesson');
  if (wake){ wake.release().catch(() => {}); wake = null; }
  if (location.hash && location.hash !== '#lessons') history.replaceState(null, '', '#lessons');
  renderLibrary();
  refreshLibrary();
}
$('#backBtn').addEventListener('click', showLibrary);
$('#prevBtn').addEventListener('click', () => goto(S.page - 1));
$('#nextBtn').addEventListener('click', () => goto(S.page + 1));
for (const b of document.querySelectorAll('.undo')) b.addEventListener('click', () => { undo(); bumpMini(); });
for (const b of document.querySelectorAll('.redo')) b.addEventListener('click', () => { redo(); bumpMini(); });
window.addEventListener('hashchange', () => {
  const k = location.hash.slice(1);
  if (info(k)){ if (S.key !== k || S.view !== 'lesson') openLesson(k); }
  else if (S.view === 'lesson') showLibrary();
});
document.addEventListener('keydown', e => {
  if (S.view !== 'lesson') return;
  const mod = e.metaKey || e.ctrlKey;
  if (mod && e.key.toLowerCase() === 'z'){ e.preventDefault(); e.shiftKey ? redo() : undo(); return; }
  if (mod || e.altKey) return;
  const k = e.key;
  if (k === 'ArrowRight' || k === 'ArrowDown' || k === 'PageDown' || k === ' '){ e.preventDefault(); goto(S.page + 1); }
  else if (k === 'ArrowLeft' || k === 'ArrowUp' || k === 'PageUp'){ e.preventDefault(); goto(S.page - 1); }
  else if (k === 'Escape'){ if (presenting()) setPresent(false); else closePanels(); }
  else if (k === 'p' || k === 'h' || k === 'e' || k === 'l'){ prefs.tool = { p:'pen', h:'hl', e:'eraser', l:'laser' }[k]; savePrefs(); renderTools(); }
  else if (k === '0'){ fitZoom(); }
});

/* Save right away if the app is closed or sent to the background mid-pause. */
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') Saver.flushNow(); });
window.addEventListener('pagehide', () => Saver.flushNow());

/* ---------- Offline support and updates ----------
   The service worker keeps the app available offline. When a new version is published it installs in the
   background; this page then offers a one-tap reload instead of waiting for the next launch. */
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')){
  const hadController = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.register('sw.js').then(reg => {
    reg.update().catch(() => {});
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') reg.update().catch(() => {}); });
  }).catch(() => {});
  navigator.serviceWorker.addEventListener('controllerchange', () => { if (hadController) $('#updateBar').hidden = false; });
}
$('#updateBar').addEventListener('click', () => { Saver.flushNow(); setTimeout(() => location.reload(), 300); });
$('#verLine').textContent = APP_VERSION;
$('#verText').textContent = APP_VERSION;

/* Read-only hook for automated checks of zoom and scrolling. */
window.__cgsView = () => ({ z: V.z, x: V.x, y: V.y, page: S.page, continuous: continuous() });

/* ---------- Boot ---------- */
(async function start(){
  setSave('idle');
  renderLibrary();
  await refreshLibrary();
  const k = location.hash.slice(1);
  if (info(k) && S.have.has(k)) openLesson(k);
})();
})();
