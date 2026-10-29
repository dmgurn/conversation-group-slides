(() => {
'use strict';

/* ---------- Content ---------- */
const LESSONS = {"ec1":[{"en":"Introductory Lesson","es":"Lección introductoria"},{"en":"Greetings and Introductions","es":"Saludos y presentaciones"},{"en":"Personal Introduction","es":"Presentación personal"},{"en":"Hobbies and Interests","es":"Aficiones e intereses"},{"en":"Hobbies and Interests","es":"Aficiones e intereses"},{"en":"Family","es":"Familia"},{"en":"Family","es":"Familia"},{"en":"Everyday Common Items","es":"Objetos comunes cotidianos"},{"en":"Clothing and Colors","es":"Ropa y colores"},{"en":"Daily Routines","es":"Rutinas diarias"},{"en":"Current Activities","es":"Actividades actuales"},{"en":"Time and Calendar","es":"Tiempo y calendario"},{"en":"Weather","es":"El clima"},{"en":"Jobs and Careers","es":"Trabajos y carreras profesionales"},{"en":"Jobs and Careers","es":"Trabajos y carreras profesionales"},{"en":"Food","es":"Comida"},{"en":"Food","es":"Comida"},{"en":"Food","es":"Comida"},{"en":"Money","es":"Dinero"},{"en":"Home","es":"El hogar"},{"en":"Home","es":"El hogar"},{"en":"Community","es":"Comunidad"},{"en":"Health","es":"Salud"},{"en":"Health","es":"Salud"},{"en":"Review","es":"Repaso"}],"ec2":[{"en":"Introductory Lesson","es":"Lección introductoria"},{"en":"Introductions","es":"Presentaciones"},{"en":"Interests","es":"Intereses"},{"en":"Family and Friends","es":"Familia y amigos"},{"en":"Family and Friends","es":"Familia y amigos"},{"en":"Feelings and Emotions","es":"Sentimientos y emociones"},{"en":"Interests","es":"Intereses"},{"en":"At Home","es":"En casa"},{"en":"At Home","es":"En casa"},{"en":"Daily Routines","es":"Rutinas diarias"},{"en":"Daily and Weekly Routines","es":"Rutinas diarias y semanales"},{"en":"Past Experiences","es":"Experiencias pasadas"},{"en":"Past Experiences","es":"Experiencias pasadas"},{"en":"Shopping and Food","es":"Compras y comida"},{"en":"Money and Shopping","es":"El dinero y las compras"},{"en":"In the Community","es":"En la comunidad"},{"en":"In the Community","es":"En la comunidad"},{"en":"Holidays","es":"Vacaciones"},{"en":"Going on Vacation","es":"Irse de vacaciones"},{"en":"Health and Sickness","es":"Salud y enfermedad"},{"en":"Health and Sickness","es":"Salud y enfermedad"},{"en":"Special Occasions","es":"Ocasiones especiales"},{"en":"Special Occasions","es":"Ocasiones especiales"},{"en":"Goals and Dreams","es":"Metas y sueños"},{"en":"Review","es":"Repaso"}]};
const META = {"ec1-en-01":[30,"You Are a Child of God",[3,4,9,18,19,21,24,25]],"ec1-en-02":[24,"Exercise Faith in Jesus Christ",[2,3,8,12,14,15,18,19]],"ec1-en-03":[29,"Take Responsibility",[2,3,8,12,17,20,23,24]],"ec1-en-04":[24,"Love and Teach One Another",[2,3,8,12,14,15,18,19]],"ec1-en-05":[27,"Learn by Study and by Faith",[2,3,8,11,15,17,20,22]],"ec1-en-06":[25,"You Are a Child of God",[3,4,8,12,15,16,19,20]],"ec1-en-07":[25,"Exercise Faith in Jesus Christ",[2,3,8,12,15,16,19,20]],"ec1-en-08":[23,"Press Forward",[2,3,8,12,13,14,17,18]],"ec1-en-09":[26,"Counsel with the Lord",[2,3,8,12,14,16,19,21]],"ec1-en-10":[26,"You Are a Child of God",[3,4,9,13,15,17,20,21]],"ec1-en-11":[27,"Exercise Faith in Jesus Christ",[2,3,8,12,16,18,21,22]],"ec1-en-12":[26,"Take Responsibility",[2,3,8,12,14,17,20,21]],"ec1-en-13":[25,"Love and Teach One Another",[2,3,8,12,14,15,18,20]],"ec1-en-14":[24,"You Are a Child of God",[3,4,9,13,14,15,18,19]],"ec1-en-15":[25,"Exercise Faith in Jesus Christ",[2,3,8,12,15,16,19,20]],"ec1-en-16":[25,"Take Responsibility",[2,3,8,12,14,16,19,20]],"ec1-en-17":[26,"Press Forward",[2,3,8,12,15,16,19,21]],"ec1-en-18":[26,"You Are a Child of God",[3,4,9,13,16,17,20,21]],"ec1-en-19":[26,"Exercise Faith in Jesus Christ",[2,3,8,12,14,17,20,21]],"ec1-en-20":[24,"Love and Teach One Another",[2,3,8,12,13,15,18,19]],"ec1-en-21":[23,"Counsel with the Lord",[2,3,7,11,12,13,16,18]],"ec1-en-22":[26,"You Are a Child of God",[2,5,10,14,15,17,20,21]],"ec1-en-23":[23,"Exercise Faith in Jesus Christ",[2,3,7,11,12,14,17,18]],"ec1-en-24":[29,"Press Forward",[2,3,8,12,16,20,23,24]],"ec1-en-25":[23,"Learn by Study and by Faith",[2,3,8,10,12,16,18,19]],"ec1-es-01":[30,"You Are a Child of God",[3,4,9,18,19,21,24,25]],"ec1-es-02":[24,"Exercise Faith in Jesus Christ",[2,3,8,13,-1,15,18,19]],"ec1-es-03":[29,"Take Responsibility",[2,3,8,12,17,20,23,24]],"ec1-es-04":[24,"Love and Teach One Another",[2,3,8,12,14,15,18,19]],"ec1-es-05":[27,"Learn by Study and by Faith",[2,3,8,11,15,17,21,22]],"ec1-es-06":[25,"You Are a Child of God",[3,4,8,12,15,16,19,20]],"ec1-es-07":[25,"Exercise Faith in Jesus Christ",[2,3,8,12,15,16,19,20]],"ec1-es-08":[24,"Press Forward",[2,3,8,12,14,15,18,19]],"ec1-es-09":[26,"Counsel with the Lord",[2,3,8,12,14,16,20,21]],"ec1-es-10":[26,"You Are a Child of God",[3,4,9,13,15,17,20,21]],"ec1-es-11":[27,"Exercise Faith in Jesus Christ",[2,3,8,12,16,18,21,22]],"ec1-es-12":[26,"Take Responsibility",[2,3,8,12,14,17,20,21]],"ec1-es-13":[25,"Love and Teach One Another",[2,3,8,12,14,15,19,20]],"ec1-es-14":[24,"You Are a Child of God",[3,4,9,13,14,15,18,19]],"ec1-es-15":[24,"Exercise Faith in Jesus Christ",[2,3,8,12,14,15,18,19]],"ec1-es-16":[25,"Take Responsibility",[2,3,8,12,15,16,19,20]],"ec1-es-17":[26,"Press Forward",[2,3,8,13,-1,16,20,21]],"ec1-es-18":[26,"You Are a Child of God",[3,4,9,13,16,17,20,21]],"ec1-es-19":[26,"Exercise Faith in Jesus Christ",[2,3,8,12,14,17,20,21]],"ec1-es-20":[24,"Love and Teach One Another",[2,3,8,12,13,15,18,19]],"ec1-es-21":[24,"Counsel with the Lord",[2,3,7,11,12,14,18,19]],"ec1-es-22":[24,"You Are a Child of God",[3,4,9,13,14,15,18,19]],"ec1-es-23":[23,"Exercise Faith in Jesus Christ",[2,3,7,11,12,14,17,18]],"ec1-es-24":[29,"Press Forward",[2,3,8,12,16,20,23,24]],"ec1-es-25":[23,"Learn by Study and by Faith",[2,3,8,10,12,16,18,19]],"ec2-en-01":[30,"You Are a Child of God",[3,4,9,18,19,21,24,25]],"ec2-en-02":[24,"Exercise Faith in Jesus Christ",[2,3,8,12,14,15,18,19]],"ec2-en-03":[25,"Take Responsibility",[2,3,8,12,15,16,19,20]],"ec2-en-04":[27,"Love and Teach One Another",[2,3,8,12,15,18,21,22]],"ec2-en-05":[25,"Learn by Study and by Faith",[2,3,8,12,14,15,18,19]],"ec2-en-06":[24,"You Are a Child of God",[3,4,8,12,13,15,18,19]],"ec2-en-07":[24,"Exercise Faith in Jesus Christ",[2,3,8,12,13,15,18,19]],"ec2-en-08":[26,"Press Forward",[2,3,8,12,15,17,20,21]],"ec2-en-09":[26,"Counsel with the Lord",[2,3,8,12,14,16,19,20]],"ec2-en-10":[25,"You Are a Child of God",[3,4,9,13,15,16,19,20]],"ec2-en-11":[24,"Exercise Faith in Jesus Christ",[2,3,8,12,14,15,18,19]],"ec2-en-12":[25,"Take Responsibility",[2,3,8,12,15,16,19,20]],"ec2-en-13":[28,"Love and Teach One Another",[2,3,8,12,14,18,21,22]],"ec2-en-14":[25,"You Are a Child of God",[3,4,9,13,14,16,19,20]],"ec2-en-15":[27,"Exercise Faith in Jesus Christ",[2,3,8,12,15,18,21,22]],"ec2-en-16":[24,"Take Responsibility",[2,3,8,12,14,15,18,19]],"ec2-en-17":[28,"Press Forward",[2,3,8,12,15,18,21,22]],"ec2-en-18":[25,"You Are a Child of God",[3,4,9,13,15,16,19,20]],"ec2-en-19":[24,"Exercise Faith in Jesus Christ",[2,3,8,12,14,15,18,19]],"ec2-en-20":[24,"Love and Teach One Another",[2,3,8,12,14,15,18,19]],"ec2-en-21":[26,"Counsel with the Lord",[2,3,7,11,13,16,19,20]],"ec2-en-22":[27,"You Are a Child of God",[3,4,9,13,16,18,21,22]],"ec2-en-23":[22,"Exercise Faith in Jesus Christ",[2,3,7,11,12,13,16,17]],"ec2-en-24":[24,"Press Forward",[2,3,8,12,14,15,18,19]],"ec2-en-25":[24,"Learn by Study and by Faith",[2,3,8,11,14,18,-1,20]],"ec2-es-01":[30,"You Are a Child of God",[3,4,9,18,19,21,24,25]],"ec2-es-02":[24,"Exercise Faith in Jesus Christ",[2,3,8,12,14,15,19,20]],"ec2-es-03":[25,"Take Responsibility",[2,3,8,12,15,16,20,21]],"ec2-es-04":[29,"Love and Teach One Another",[2,3,8,12,18,20,23,24]],"ec2-es-05":[25,"Learn by Study and by Faith",[2,3,8,12,14,15,19,20]],"ec2-es-06":[25,"You Are a Child of God",[3,4,8,12,14,16,19,20]],"ec2-es-07":[25,"Exercise Faith in Jesus Christ",[2,3,8,12,14,16,19,20]],"ec2-es-08":[26,"Press Forward",[2,3,8,12,15,17,20,21]],"ec2-es-09":[26,"Counsel with the Lord",[2,3,8,12,14,16,20,21]],"ec2-es-10":[25,"You Are a Child of God",[3,4,9,13,15,16,19,20]],"ec2-es-11":[24,"Exercise Faith in Jesus Christ",[2,3,8,12,14,15,18,19]],"ec2-es-12":[25,"Take Responsibility",[2,3,8,12,15,16,19,20]],"ec2-es-13":[28,"Love and Teach One Another",[2,3,8,12,14,18,22,23]],"ec2-es-14":[25,"You Are a Child of God",[3,4,9,13,14,16,19,20]],"ec2-es-15":[27,"Exercise Faith in Jesus Christ",[2,3,8,12,16,18,21,22]],"ec2-es-16":[24,"Take Responsibility",[2,3,8,12,14,15,18,19]],"ec2-es-17":[28,"Press Forward",[2,3,8,12,15,18,22,23]],"ec2-es-18":[25,"You Are a Child of God",[3,4,9,13,14,16,18,20]],"ec2-es-19":[24,"Exercise Faith in Jesus Christ",[2,3,8,12,14,15,17,19]],"ec2-es-20":[24,"Love and Teach One Another",[2,3,8,12,14,15,17,19]],"ec2-es-21":[26,"Counsel with the Lord",[2,3,7,11,13,16,18,21]],"ec2-es-22":[27,"You Are a Child of God",[3,4,9,13,16,18,21,22]],"ec2-es-23":[22,"Exercise Faith in Jesus Christ",[2,3,7,11,12,13,16,17]],"ec2-es-24":[24,"Press Forward",[2,3,8,12,14,15,18,19]],"ec2-es-25":[24,"Learn by Study and by Faith",[2,3,8,11,14,17,19,20]]};          // key -> [slideCount, principle, [prayer, principle, a1, a2, a3, evaluate, faith, closing]] (-1 = not found)
const PAIRS = {"ec1-en-01":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"ec1-es-01":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"ec1-en-02":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec1-es-02":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec1-en-03":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],"ec1-es-03":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],"ec1-en-04":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec1-es-04":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec1-en-05":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"ec1-es-05":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"ec1-en-06":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec1-es-06":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec1-en-07":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec1-es-07":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec1-en-08":[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23],"ec1-es-08":[0,1,2,3,4,5,6,7,8,9,10,11,11,12,13,14,15,16,17,18,19,20,21,22],"ec1-en-09":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-es-09":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-en-10":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-es-10":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-en-11":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"ec1-es-11":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"ec1-en-12":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-es-12":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-en-13":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec1-es-13":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec1-en-14":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec1-es-14":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec1-en-15":[0,1,2,3,4,5,6,7,8,9,10,11,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec1-es-15":[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24],"ec1-en-16":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec1-es-16":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec1-en-17":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-es-17":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-en-18":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-es-18":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-en-19":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-es-19":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec1-en-20":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec1-es-20":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec1-en-21":[0,1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21,22,23],"ec1-es-21":[0,1,2,3,4,5,6,7,8,9,10,11,12,12,13,14,15,16,17,18,19,20,21,22],"ec1-en-22":[0,1,1,2,3,4,5,6,7,8,9,10,11,12,13,13,14,15,16,17,18,19,20,21,22,23],"ec1-es-22":[0,1,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,23,24,25],"ec1-en-23":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],"ec1-es-23":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],"ec1-en-24":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],"ec1-es-24":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],"ec1-en-25":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],"ec1-es-25":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],"ec2-en-01":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"ec2-es-01":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"ec2-en-02":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,21,22,23],"ec2-es-02":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,17,18,19,20,22,23],"ec2-en-03":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21,22,22,23,24],"ec2-es-03":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,18,19,20,21,23,24],"ec2-en-04":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,19,20,21,22,23,24,25,26,27,28],"ec2-es-04":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,14,15,16,16,17,18,19,20,21,22,23,24,25,26],"ec2-en-05":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,22,23,24],"ec2-es-05":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,16,17,18,19,20,21,23,24],"ec2-en-06":[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24],"ec2-es-06":[0,1,2,3,4,5,6,7,8,9,10,11,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-en-07":[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24],"ec2-es-07":[0,1,2,3,4,5,6,7,8,9,10,11,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-en-08":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec2-es-08":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"ec2-en-09":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,23,23,24,25],"ec2-es-09":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,17,18,19,20,21,22,24,25],"ec2-en-10":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec2-es-10":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec2-en-11":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-es-11":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-en-12":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec2-es-12":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec2-en-13":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,25,25,26,27],"ec2-es-13":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,19,20,21,22,23,24,26,27],"ec2-en-14":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec2-es-14":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec2-en-15":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"ec2-es-15":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"ec2-en-16":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-es-16":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-en-17":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,25,25,26,27],"ec2-es-17":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,19,20,21,22,23,24,26,27],"ec2-en-18":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec2-es-18":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"ec2-en-19":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-es-19":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-en-20":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-es-20":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-en-21":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,23,24,25],"ec2-es-21":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,20,21,22,24,25],"ec2-en-22":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"ec2-es-22":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"ec2-en-23":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],"ec2-es-23":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],"ec2-en-24":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-es-24":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-en-25":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"ec2-es-25":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]};        // key -> for each slide, the matching slide index in the other language's deck
const MANUALS = {"ec1":{"n":214,"start":[17,23,29,35,41,51,59,65,71,81,89,95,101,111,117,123,131,141,147,155,161,169,175,181,189],"conv":[18,26,32,38,45,56,62,68,74,86,92,98,105,114,120,128,135,144,152,158,164,172,178,185,191]},"ec2":{"n":215,"start":[17,23,29,35,41,49,55,63,71,81,87,93,99,111,117,125,131,141,149,155,161,169,175,181,187],"conv":[18,26,32,38,44,52,60,66,74,84,90,96,104,114,122,128,134,146,152,158,164,172,178,184,189]}};    // course -> { n, start:[first page of each lesson], conv:[first conversation-group page of each lesson] } (0-based; the English and Spanish manuals share this layout)
const APP_VERSION = 'Version 6 · October 29, 2026';
const UNITS = [[1,5],[6,9],[10,13],[14,17],[18,21],[22,25]];
const SECTION_SHORT = ['Prayer','Principle','Activity 1','Activity 2','Activity 3','Evaluate','Act in faith','Closing'];
const PEN_COLORS = [['#15171C','Black'],['#1F55D6','Blue'],['#D7322B','Red'],['#178A4A','Green'],['#FFFFFF','White']];
const HL_COLORS = [['#FFE14D','Yellow'],['#7DF0A0','Green'],['#FF94DA','Pink'],['#84D6FF','Blue']];
const SIZES = { pen:[2.2,3.6,6.5], hl:[14,22,34] };   // thousandths of the page width, at 1x zoom
const SIZE_DOTS = [5,8,12];
const Q = 4000;                                        // stored coordinate scale
const SLIDE_ASPECT = 16/9;
const MAXZ = 4;
const TOOL_NAMES = { pen:'Pen', hl:'Highlighter', eraser:'Eraser', laser:'Laser pointer' };
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
const prefs = Object.assign({course:'ec1', lang:'en', tool:'pen', prevTool:'pen', penColor:0, hlColor:0, penSize:1, hlSize:1,
  fingerDraw:true, sawPen:false, scroll:false, tapEraser:true, manualLang:null}, lsGet('prefs', {}) || {});
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
/* Stored manuals: "manual-ec1" is the bilingual Spanish manual, "manual-ec1-en" the English one. */
const manualKey = (course, lang) => 'manual-' + course + (lang === 'en' ? '-en' : '');
const manualLangOf = key => /-en$/.test(key || '') ? 'en' : 'es';
const langName = l => l === 'en' ? 'English' : 'Spanish';

/* ---------- On-device storage (IndexedDB): slides, manuals and marks ---------- */
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
  /* Everything saved under one lesson (or one manual): its marks per page, and its meta record. */
  async load(owner){
    const out = { ink:{}, meta:null };
    const docs = await DB.range('docs', owner + '_', owner + '_￿');
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

/* ---------- App state ----------
   An open lesson has three views: its slides, an endless scratchpad, and the student manual.
   Each view keeps its own place and its own undo history, so you can switch back and forth.
   Page keys: s<i> slide, b<i> scratchpad page, m<i> manual page. */
const newHist = () => ({ slides:{u:[],r:[]}, pad:{u:[],r:[]}, manual:{u:[],r:[]} });
const S = {
  key:null, info:null, n:0, boards:2, ink:{}, view:'library', have:new Set(),
  mode:'slides', back:'slides', page:0, pos:{}, hist:newHist(),
  man:{ key:null, n:0, ink:{}, aspect:0.77, loaded:false }
};
let PAGES = [];
function rebuildPages(){
  const n = S.mode === 'pad' ? S.boards : S.mode === 'manual' ? S.man.n : S.n;
  const p = S.mode === 'pad' ? 'b' : S.mode === 'manual' ? 'm' : 's';
  PAGES = Array.from({ length:n }, (_, j) => p + j);
}
const total = () => PAGES.length;
const pk = (i = S.page) => PAGES[i];
const pkIndex = k => PAGES.indexOf(k);
const inkFor = k => k[0] === 'm' ? S.man.ink : S.ink;
const strokesFor = k => { const o = inkFor(k); return (o[k] ||= []); };
const continuous = () => S.mode === 'pad' || !!prefs.scroll;
const presenting = () => document.body.classList.contains('presenting');
const aspect = () => S.mode === 'manual' ? S.man.aspect : SLIDE_ASPECT;
const gap = () => S.mode === 'pad' ? 0 : 16;
const histNow = () => S.hist[S.mode];

/* ---------- Library ---------- */
let libMeta = {};
function renderLibrary(){
  for (const b of document.querySelectorAll('[data-course]')) b.setAttribute('aria-pressed', b.dataset.course === prefs.course);
  for (const b of document.querySelectorAll('[data-lang]')) b.setAttribute('aria-pressed', b.dataset.lang === prefs.lang);

  const haveCount = ALL_KEYS.filter(k => S.have.has(k)).length;
  $('#importCard').hidden = haveCount >= ALL_KEYS.length;
  const man = [];
  for (const c of ['ec1','ec2']) for (const l of ['en','es']) if (S.have.has(manualKey(c, l))) man.push(`${c.toUpperCase()} ${langName(l)}`);
  $('#haveLine').textContent = (haveCount >= ALL_KEYS.length ? 'All 100 lessons are on this iPad and work without internet. ' : `${haveCount} of 100 lessons are on this iPad. `)
    + (man.length === 4 ? 'All four student manuals are added (EC1 and EC2, English and Spanish).'
      : man.length ? `Student manuals added: ${man.join(', ')}.`
      : 'To open the student manual from a lesson, tap “Add slides or manuals” and choose the manual PDFs, such as “EC1 Manual ES.pdf” or “EC1 Manual EN.pdf”.');

  const last = Object.values(libMeta).filter(m => m && info(m.lesson) && S.have.has(m.lesson)).sort((a, b) => (b.at || 0) - (a.at || 0))[0];
  const cont = $('#continue');
  if (last){
    const li = info(last.lesson);
    const page = clamp(last.last || 0, 0, li.n - 1);
    cont.replaceChildren(
      h('span', {style:'display:grid;gap:2px;min-width:0'},
        h('span', {class:'c-label', text:'Pick up where you left off'}),
        h('span', {class:'c-title', text:`${li.course === 'ec1' ? 'EC1' : 'EC2'} · Lesson ${li.num} · ${li.title}`}),
        h('span', {class:'c-sub', text:`${li.lang === 'es' ? 'Spanish' : 'English'} slides · Slide ${page + 1} of ${li.n}`})),
      h('span', {class:'c-go'}, icon('next')));
    cont.onclick = () => openLesson(li.key, page);
    cont.hidden = false;
  } else cont.hidden = true;

  const units = UNITS.map(([a, b], ui) => {
    const cards = [];
    for (let n = a; n <= b; n++){
      const key = lessonKey(prefs.course, prefs.lang, n), li = info(key), m = libMeta[key];
      const has = S.have.has(key);
      const inked = m && Array.isArray(m.inked) ? m.inked.filter(k => k[0] === 's').length : 0;
      cards.push(h('button', {type:'button', class:'card' + (has ? '' : ' missing'), onclick: () => has ? openLesson(key) : needSlides()},
        h('span', {class:'top'}, h('span', {class:'num', text: String(n).padStart(2,'0')}), h('span', {class:'count', text:`${li.n} slides`})),
        h('span', {class:'title', text: li.title}),
        li.principle ? h('span', {class:'pl', text: li.principle}) : h('span'),
        h('span', {class:'notes', text: !has ? 'Slides not added yet' : inked ? `Your marks on ${inked} slide${inked === 1 ? '' : 's'}` : ''})));
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

/* ---------- Importing slides and manuals (a .zip of PDFs, or the PDFs themselves) ---------- */
function keyFromName(name){
  const base = String(name).split('/').pop();
  if (!base || base.startsWith('._')) return null;
  const mm = /\bEC\s*([12])\b[^/]*?manual|englishconnect[\s_-]*([12])[\s_-]*(?:for|para)[\s_-]*(?:learners|los[\s_-]*alumnos)/i.exec(base);
  if (mm) return manualKey('ec' + (mm[1] || mm[2]), /\b(EN|ENG|English|Ingl[eé]s)\b/i.test(base.replace(/\.pdf$/i, '')) ? 'en' : 'es');
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
  const say = t => { $('#importText').textContent = t; $('#footImport').textContent = t; };
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
  let done = 0, lessons = 0, manuals = 0;
  for (const it of items){
    try {
      const blob = await it.get();
      const buf = await blob.arrayBuffer();
      if (String.fromCharCode(...new Uint8Array(buf, 0, 5)) !== '%PDF-'){ failed++; }
      else {
        await DB.put('slides', it.key, new Blob([buf], { type:'application/pdf' }));
        if (it.key.startsWith('manual-')){ manuals++; if (S.man.key === it.key) S.man.loaded = false; }
        else lessons++;
      }
    } catch (err) { failed++; }
    done++;
    bar.style.width = Math.round(done / items.length * 100) + '%';
    say(`Adding… ${done} of ${items.length}`);
  }
  await refreshLibrary();
  renderLibrary();
  for (const b of btns) b.disabled = false;
  const parts = [];
  if (lessons) parts.push(`Added ${lessons} lesson${lessons === 1 ? '' : 's'}.`);
  if (manuals) parts.push(`Added ${manuals} student manual${manuals === 1 ? '' : 's'}.`);
  if (skipped) parts.push(`${skipped} file${skipped === 1 ? ' was' : 's were'} not recognized.`);
  if (failed) parts.push(`${failed} could not be read.`);
  if (!items.length && !failed) parts.push('Nothing was recognized. Choose “EnglishConnect Slides for iPad.zip”, lesson PDFs named like “EC1 EN L08 - Everyday Common Items.pdf”, or “EC1 Manual ES.pdf”.');
  say(parts.join(' '));
  if (lessons || manuals) toast(parts.filter(p => p.startsWith('Added')).join(' '));
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
      if (!d || typeof d.id !== 'string' || !d.data) continue;
      if (!/^(ec[12]-(en|es)-\d\d_(meta|s\d+|b\d+)|manual-ec[12](-en)?_m\d+)$/.test(d.id)) continue;
      await DB.put('docs', d.id, d.data); n++;
    }
    S.man.loaded = false;
    await refreshLibrary();
    toast(`Restored marks from ${n} saved page${n === 1 ? '' : 's'}.`);
  } catch { toast('That file is not a Conversation Group Slides backup.'); }
});

/* ---------- PDF documents: the open lesson's slides, and its course's student manual ---------- */
const pdfjs = window.pdfjsLib;
if (pdfjs) pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
const PDF = { lesson:{ key:null, doc:null, loading:null }, manual:{ key:null, doc:null, loading:null } };
const pageCache = new Map();   // "slot:key:i@w" -> canvas of the page at fitted size
const thumbCache = new Map();
const inflight = new Map();
let chain = Promise.resolve();
function enqueue(fn){ const p = chain.then(fn, fn); chain = p.catch(() => {}); return p; }
async function loadPdf(slot, key){
  const P = PDF[slot];
  if (P.doc && P.key === key) return P.doc;
  if (P.loading && P.loading.key === key) return P.loading.p;
  if (!pdfjs) throw new Error('viewer');
  const old = P.doc; P.doc = null; P.key = null;
  for (const k of [...pageCache.keys()]) if (k.startsWith(slot + ':')) pageCache.delete(k);
  thumbCache.clear(); crispCache = null;
  if (old) old.destroy().catch(() => {});
  const p = (async () => {
    const blob = await DB.get('slides', key);
    if (!blob){ const e = new Error('missing'); e.code = 'missing'; throw e; }
    const data = new Uint8Array(await blob.arrayBuffer());
    const doc = await pdfjs.getDocument({ data, isEvalSupported:false }).promise;
    if (P.loading && P.loading.key === key){ P.doc = doc; P.key = key; P.loading = null; }
    else doc.destroy().catch(() => {});
    return doc;
  })();
  P.loading = { key, p };
  p.catch(() => { if (P.loading && P.loading.key === key) P.loading = null; });
  return p;
}
/* Which PDF page a page key shows. Scratchpad pages have none. */
function pdfFor(k){ return k[0] === 's' ? { slot:'lesson', i:+k.slice(1) } : k[0] === 'm' ? { slot:'manual', i:+k.slice(1) } : null; }
function cacheKeyFor(k, w){ const src = pdfFor(k); return src ? `${src.slot}:${PDF[src.slot].key}:${src.i}@${w}` : ''; }
function renderPdfPage(k, w, opts = {}){
  const src = pdfFor(k); if (!src) return Promise.resolve(null);
  const P = PDF[src.slot], doc = P.doc, key = P.key;
  const queued = opts.queued !== false, keep = opts.keep !== false;
  const ck = `${src.slot}:${key}:${src.i}@${w}`;
  if (keep && pageCache.has(ck)) return Promise.resolve(pageCache.get(ck));
  if (keep && inflight.has(ck)) return inflight.get(ck);
  const run = async () => {
    if (keep && pageCache.has(ck)) return pageCache.get(ck);
    if (!doc || key !== P.key) return null;
    const page = await doc.getPage(src.i + 1);
    const vp0 = page.getViewport({ scale:1 });
    const vp = page.getViewport({ scale: w / vp0.width });
    const c = document.createElement('canvas');
    c.width = Math.round(vp.width); c.height = Math.round(vp.height);
    await page.render({ canvasContext: c.getContext('2d', { alpha:false }), viewport: vp }).promise;
    if (key !== P.key) return null;
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

/* ---------- The view: fitted pages, zoom and scrolling ----------
   Pages sit in a "document". Single-page mode shows one page; continuous mode stacks every page
   vertically. The view maps document points to the screen: screen = (V.x + docX·z, V.y + docY·z). */
const stage = $('#stage');
const pdfc = $('#pdfc'), inkc = $('#inkc'), livec = $('#livec');
const pctx = pdfc.getContext('2d'), ictx = inkc.getContext('2d'), lctx = livec.getContext('2d');
const L = { sw:0, sh:0, dpr:1, pw:0, ph:0, pad:8, sig:'' };
const V = { z:1, x:0, y:0 };
const baseW = () => Math.round(L.pw * L.dpr);
const pageTop = k => continuous() ? k * (L.ph + gap()) : 0;
const docH = () => continuous() ? Math.max(1, total()) * (L.ph + gap()) - gap() : L.ph;

function layout(force){
  const sw = stage.clientWidth, sh = stage.clientHeight;
  if (sw <= 0 || sh <= 0) return false;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const pad = presenting() ? 0 : 8;
  const a = aspect();
  const sig = [sw, sh, dpr, pad, S.mode, continuous(), a.toFixed(4)].join(',');
  if (!force && sig === L.sig) return false;
  L.sig = sig; L.sw = sw; L.sh = sh; L.dpr = dpr; L.pad = pad;
  if (S.mode === 'pad') L.pw = Math.min(sw - pad * 2, 1600);                       // the scratchpad is as wide as the screen
  else if (S.mode === 'manual' && continuous()) L.pw = Math.min(sw - pad * 2, 1100); // scrolling manual pages fill the width
  else L.pw = Math.min(sw - pad * 2, (sh - pad * 2) * a);                          // otherwise a whole page fits on screen
  L.pw = Math.max(1, Math.floor(L.pw));
  L.ph = Math.floor(L.pw / a);
  for (const c of [pdfc, inkc, livec]){ const W = Math.round(sw * dpr), H = Math.round(sh * dpr); if (c.width !== W) c.width = W; if (c.height !== H) c.height = H; }
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
function panBy(dx, dy){ V.x += dx; V.y += dy; clampView(); if (S.mode === 'pad') growPadIfNearEnd(); }
function pageRect(k){ const d = L.dpr; return { ox: V.x * d, oy: (V.y + pageTop(k) * V.z) * d, W: L.pw * V.z * d, H: L.ph * V.z * d }; }
function visiblePages(){
  if (!continuous()) return S.page < total() ? [S.page] : [];
  const out = [], step = (L.ph + gap()) * V.z;
  for (let k = Math.max(0, Math.floor(-V.y / step)); k < total(); k++){
    const top = V.y + pageTop(k) * V.z;
    if (top > L.sh) break;
    if (top + L.ph * V.z >= 0) out.push(k);
  }
  return out;
}
/* Scratchpad writing can run across the edge between two pages, so neighbours are drawn too. */
function inkPages(){
  const v = visiblePages();
  if (S.mode !== 'pad' || !v.length) return v;
  const out = v.slice();
  if (v[0] > 0) out.unshift(v[0] - 1);
  if (v[v.length - 1] < total() - 1) out.push(v[v.length - 1] + 1);
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
  // Keep the current page while it is fully on screen; otherwise it is the one under the upper third.
  const top = V.y + pageTop(S.page) * V.z;
  if (S.page >= 0 && S.page < total() && top >= -1 && top + L.ph * V.z <= L.sh + 1) return;
  const step = (L.ph + gap()) * V.z;
  const k = clamp(Math.floor((L.sh * 0.35 - V.y) / step), 0, total() - 1);
  if (k !== S.page){ S.page = k; updateRails(); scheduleMeta(); prefetch(); }
}

/* ---------- The endless scratchpad ---------- */
function lastInkedBoard(){ let last = -1; for (const k of Object.keys(S.ink)) if (k[0] === 'b' && S.ink[k] && S.ink[k].length) last = Math.max(last, +k.slice(1)); return last; }
/* There is always at least one blank page below the last one written on, so the pad never runs out. */
function ensurePad(){
  const want = Math.max(2, lastInkedBoard() + 2);
  if (want > S.boards){ S.boards = want; if (S.mode === 'pad') rebuildPages(); scheduleMeta(); return true; }
  return false;
}
function growPadIfNearEnd(){
  const bottom = V.y + docH() * V.z;
  if (bottom < L.sh + L.ph * V.z * 0.25 && lastInkedBoard() >= S.boards - 2){ S.boards++; rebuildPages(); scheduleMeta(); }
}

/* ---------- Drawing the view ---------- */
let drawRAF = 0;
function requestDraw(){ if (!drawRAF) drawRAF = requestAnimationFrame(() => { drawRAF = 0; drawView(); }); }
function drawView(){
  if (S.view !== 'lesson' || !L.pw) return;
  drawPdfLayer(); redrawInk(); syncCurrentPage();
}
/* A white page with a light dot grid. The dots line up across pages, so the scratchpad looks seamless. */
function drawBoard(ctx, P){
  ctx.fillStyle = '#FFFFFF'; ctx.fillRect(P.ox, P.oy, P.W, P.H);
  const step = P.W / 32, r = Math.max(1, P.W / 900);
  ctx.fillStyle = '#D5DBE5';
  for (let y = step; y <= P.H + step * 0.05; y += step){
    const yy = P.oy + y; if (yy < -r || yy > ctx.canvas.height + r) continue;
    for (let x = step; x < P.W - step * 0.5; x += step){ ctx.beginPath(); ctx.arc(P.ox + x, yy, r, 0, Math.PI * 2); ctx.fill(); }
  }
}
let crispCache = null, crispTimer = 0, crispTok = 0, crispTask = null;
const viewKey = () => [S.key, S.mode, continuous() ? 'c' : S.page, Math.round(V.x), Math.round(V.y), Math.round(V.z * 1000), L.sw, L.sh, L.dpr, total()].join(',');
function drawPdfLayer(){
  const d = L.dpr;
  pctx.setTransform(1, 0, 0, 1, 0, 0); pctx.clearRect(0, 0, pdfc.width, pdfc.height);
  for (const k of visiblePages()){
    const P = pageRect(k), key = pk(k);
    if (key[0] === 'b'){ drawBoard(pctx, P); continue; }
    pctx.save();
    if (!presenting()){ pctx.shadowColor = 'rgba(0,0,0,.28)'; pctx.shadowBlur = 24 * d; pctx.shadowOffsetY = 6 * d; }
    pctx.fillStyle = '#FFFFFF'; pctx.fillRect(P.ox, P.oy, P.W, P.H);
    pctx.restore();
    const base = pageCache.get(cacheKeyFor(key, baseW()));
    if (base) pctx.drawImage(base, P.ox, P.oy, P.W, P.H);
    else renderPdfPage(key, baseW(), { queued:false }).then(c => { if (c) requestDraw(); }).catch(() => {});
  }
  if (crispCache && crispCache.key === viewKey()){ for (const p of crispCache.parts) pctx.drawImage(p.c, p.x, p.y); }
  else scheduleCrisp();
}
/* When zoomed in, re-render just the visible part of each page at full sharpness once movement stops. */
function scheduleCrisp(){
  clearTimeout(crispTimer);
  if (crispTask){ try { crispTask.cancel(); } catch {} crispTask = null; }
  crispTok++;
  if (V.z < 1.02 || S.mode === 'pad') return;
  crispTimer = setTimeout(renderCrisp, 170);
}
async function renderCrisp(){
  const key = viewKey(), tok = ++crispTok;
  const parts = [];
  for (const k of visiblePages()){
    const src = pdfFor(pk(k)); if (!src) continue;
    const doc = PDF[src.slot].doc; if (!doc) continue;
    const P = pageRect(k);
    const x0 = Math.max(0, Math.floor(P.ox)), y0 = Math.max(0, Math.floor(P.oy));
    const x1 = Math.min(pdfc.width, Math.ceil(P.ox + P.W)), y1 = Math.min(pdfc.height, Math.ceil(P.oy + P.H));
    if (x1 <= x0 || y1 <= y0) continue;
    let page;
    try { page = await doc.getPage(src.i + 1); } catch { return; }
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
  for (const j of [S.page + 1, S.page - 1, S.page + 2]) if (j >= 0 && j < total()) renderPdfPage(pk(j), baseW()).catch(() => {});
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
  ctx.save();
  if (S.mode !== 'pad'){ ctx.beginPath(); ctx.rect(P.ox, P.oy, P.W, P.H); ctx.clip(); }
  ctx.translate(P.ox, P.oy);
  for (const s of list) drawStroke(ctx, s, P.W, P.H);
  ctx.restore();
}
function redrawInk(){
  ictx.setTransform(1, 0, 0, 1, 0, 0); ictx.clearRect(0, 0, inkc.width, inkc.height);
  for (const k of inkPages()){ const key = pk(k), arr = inkFor(key)[key]; if (arr && arr.length) inkOnPage(ictx, k, arr); }
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
  // On the scratchpad a stroke may carry on onto the page above or below.
  const X = Math.round(clamp(x, 0, 1) * Q), Y = Math.round((S.mode === 'pad' ? clamp(y, -1, 2) : clamp(y, 0, 1)) * Q);
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
const eraserR = () => Math.max(9, Math.min(L.pw, 1200) * 0.012);
/* Erase along a line in stage coordinates, across whichever pages it passes over. */
function eraseLine(x0, y0, x1, y1){
  const r = eraserR(), steps = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / (r / 2)));
  const w = L.pw * V.z, hh = L.ph * V.z, pad = S.mode === 'pad';
  let removed = false;
  for (let k = 0; k <= steps; k++){
    const sx = x0 + (x1 - x0) * k / steps, sy = y0 + (y1 - y0) * k / steps;
    for (const pg of inkPages()){
      const top = V.y + pageTop(pg) * V.z;
      if (!pad && (sx < V.x - r || sx > V.x + w + r || sy < top - r || sy > top + hh + r)) continue;
      const key = pk(pg), arr = inkFor(key)[key]; if (!arr || !arr.length) continue;
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
  const lw = Math.max(3, Math.min(L.pw, 1200) * d * 0.0055);
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
  if (g.max === 1 && !g.moved && dt < 300) handleTap(t.y - stage.getBoundingClientRect().top);
}
/* A one-finger tap switches between your tool and the eraser (the web can't see Apple Pencil's
   double-tap, so this stands in for it). While presenting, a tap near the top shows the tools.
   When zoomed in, a double tap zooms back out to fit. */
let lastTap = 0, tapTimer = 0;
function handleTap(sy){
  const now = performance.now(), zoomed = V.z > 1.02;
  if (zoomed && now - lastTap < 320){ clearTimeout(tapTimer); lastTap = 0; fitZoom(); return; }
  lastTap = now;
  clearTimeout(tapTimer);
  if (zoomed) tapTimer = setTimeout(() => tapAction(sy), 280); else tapAction(sy);
}
function tapAction(sy){
  if (presenting() && (!prefs.tapEraser || sy < 90)){ toggleMini(); return; }
  if (prefs.tapEraser) toggleEraser();
}
function toggleEraser(){
  if (prefs.tool === 'eraser') prefs.tool = prefs.prevTool && prefs.prevTool !== 'eraser' ? prefs.prevTool : 'pen';
  else { prefs.prevTool = prefs.tool; prefs.tool = 'eraser'; }
  savePrefs(); renderTools();
  toast(TOOL_NAMES[prefs.tool] || 'Pen', 1200);
}
function fitZoom(){
  zoomAt(L.sw / 2, L.sh / 2, 1 / V.z);
  if (!continuous()) viewTo(S.page);
  requestDraw();
}

stage.addEventListener('pointerdown', e => {
  if (S.view !== 'lesson' || e.target.closest('#stageMsg')) return;
  closePanels();
  stopMomentum();
  if (e.pointerType === 'pen') lastPenAt = performance.now();
  if (e.pointerType === 'pen' && !prefs.sawPen){
    prefs.sawPen = true;
    if (prefs.fingerDraw){ prefs.fingerDraw = false; updateMenu(); toast('Apple Pencil found. Fingers now scroll, swipe and pinch. Tap with one finger to switch to the eraser and back.'); }
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
// If a finger lifts outside the page area, still finish its gesture.
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
// Safari's own pinch gesture events would zoom the whole page; the pages handle pinching instead.
for (const ev of ['gesturestart', 'gesturechange', 'gestureend']) document.addEventListener(ev, e => e.preventDefault(), { passive:false });

/* ---------- Undo / redo (each view keeps its own history) ---------- */
function pushOp(op){ const hh = histNow(); hh.u.push(op); if (hh.u.length > 400) hh.u.shift(); hh.r.length = 0; updateUndo(); }
function opPages(op){ return op.a === 'erase' || op.a === 'clearMany' ? [...new Set(op.items.map(it => it[0]))] : [op.p]; }
function reveal(op){
  if (op.a === 'clearMany') return;
  const idx = pkIndex(opPages(op)[0]);
  if (idx >= 0 && idx < total() && !visiblePages().includes(idx)) goto(idx);
}
function undo(){
  const op = histNow().u.pop(); if (!op) return;
  reveal(op);
  if (op.a === 'add'){ const arr = strokesFor(op.p), i = arr.lastIndexOf(op.s); if (i >= 0) arr.splice(i, 1); }
  else if (op.a === 'erase'){ for (let k = op.items.length - 1; k >= 0; k--){ const [key, i, s] = op.items[k]; const arr = strokesFor(key); arr.splice(Math.min(i, arr.length), 0, s); } }
  else if (op.a === 'clear'){ const arr = strokesFor(op.p); arr.splice(0, arr.length, ...op.items); }
  else if (op.a === 'clearMany'){ for (const [key, list] of op.items){ const arr = strokesFor(key); arr.splice(0, arr.length, ...list); } }
  histNow().r.push(op); redrawInk(); for (const key of opPages(op)) inkChanged(key); updateUndo();
  if (op.a === 'clearMany') toast('Marks are back.');
}
function redo(){
  const op = histNow().r.pop(); if (!op) return;
  reveal(op);
  if (op.a === 'add') strokesFor(op.p).push(op.s);
  else if (op.a === 'erase'){ for (const [key, i, s] of op.items){ const arr = strokesFor(key); const j = arr.indexOf(s); if (j >= 0) arr.splice(j, 1); else if (arr[i] === s) arr.splice(i, 1); } }
  else if (op.a === 'clear') strokesFor(op.p).length = 0;
  else if (op.a === 'clearMany') for (const [key] of op.items) strokesFor(key).length = 0;
  histNow().u.push(op); redrawInk(); for (const key of opPages(op)) inkChanged(key); updateUndo();
}
function updateUndo(){
  const hh = histNow();
  for (const b of document.querySelectorAll('.undo')) b.disabled = !hh.u.length;
  for (const b of document.querySelectorAll('.redo')) b.disabled = !hh.r.length;
}

/* ---------- Saving ---------- */
function inkChanged(page){
  const owner = page[0] === 'm' ? S.man.key : S.key, arr = strokesFor(page);
  if (!owner) return;
  Saver.schedule(owner + '_' + page, () => arr.length ? { kind:'ink', lesson:owner, page, s:arr, at:Date.now() } : null);
  if (page[0] === 'b' && ensurePad()){ layout(true); requestDraw(); }
  if (page[0] !== 'm') scheduleMeta();
  const i = pkIndex(page), th = i >= 0 ? document.querySelector(`.th[data-i="${i}"]`) : null; if (th) drawThumbInk(th, i);
}
function scheduleMeta(){
  if (!S.key) return;
  // "last" is always a slide, so the lessons screen can offer to pick up where you left off.
  const slidePage = S.mode === 'slides' ? S.page : ((S.pos.slides && S.pos.slides.page) || 0);
  const data = { kind:'meta', lesson:S.key, boards:S.boards, last:clamp(slidePage, 0, Math.max(0, S.n - 1)), n:S.n,
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
/* Where this lesson sits in its course's student manual. */
function manualRefs(){
  const m = S.info && MANUALS[S.info.course];
  if (!m) return null;
  const k = S.info.num - 1;
  return { start: m.start[k], conv: m.conv[k], end: k < 24 ? m.start[k + 1] - 1 : (S.man.n || m.n) - 1 };
}
function slidesPage(){ return S.mode === 'slides' ? S.page : ((S.pos.slides && S.pos.slides.page) || 0); }
function updateRails(){
  const chips = $('#chips'); const list = [];
  if (S.mode === 'slides'){
    const cur = currentSection();
    S.info.sections.forEach((start, k) => {
      if (start < 0 || start >= S.n) return;
      list.push(h('button', {type:'button', class:'chip', 'aria-current': String(k === cur), onclick: () => goto(start), text: SECTION_SHORT[k]}));
    });
    $('#counter').textContent = `${S.page + 1} / ${S.n}`;
  } else {
    list.push(h('button', {type:'button', class:'chip back', onclick: () => setMode('slides')}, icon('back'), `Slide ${slidesPage() + 1}`));
    if (S.mode === 'manual'){
      const r = manualRefs();
      if (r){
        const inConv = S.page >= r.conv && S.page <= r.end, inStudy = S.page >= r.start && S.page < r.conv;
        list.push(h('button', {type:'button', class:'chip', 'aria-current': String(inStudy), onclick: () => goto(r.start), text:`Lesson ${S.info.num}: personal study`}));
        list.push(h('button', {type:'button', class:'chip', 'aria-current': String(inConv), onclick: () => goto(r.conv), text:'Conversation group'}));
      }
      $('#counter').textContent = `p. ${S.page + 1} / ${S.man.n}`;
    } else $('#counter').textContent = `Pad ${S.page + 1}`;
  }
  chips.replaceChildren(...list);
  const curChip = chips.querySelector('[aria-current="true"]');
  if (curChip){ const cr = chips.getBoundingClientRect(), r = curChip.getBoundingClientRect(); chips.scrollLeft += (r.left - cr.left) - (cr.width - r.width) / 2; }
  $('#prevBtn').disabled = S.page <= 0; $('#nextBtn').disabled = S.page >= total() - 1;
  resetClear();
  updateUndo();
  for (const th of document.querySelectorAll('.th[data-i]')) th.setAttribute('aria-current', String(+th.dataset.i === S.page));
}

/* ---------- Switching views: slides, scratchpad, manual ---------- */
function updateModeUI(){
  const li = S.info;
  for (const b of document.querySelectorAll('.padBtn')) b.setAttribute('aria-pressed', String(S.mode === 'pad'));
  for (const b of document.querySelectorAll('.manBtn')){ b.setAttribute('aria-pressed', String(S.mode === 'manual')); b.hidden = !li || !manualsFor(li.course).length; }
  for (const b of document.querySelectorAll('.langBtn')) b.hidden = S.mode === 'pad';
  updateLangButtons();
  $('#gridBtn').setAttribute('aria-label', S.mode === 'slides' ? 'All slides' : 'All pages');
  if (!li) return;
  if (S.mode === 'pad'){ $('#whereTitle').textContent = `Scratchpad · Lesson ${li.num}`; $('#whereSub').textContent = 'Write anywhere. More room appears as you go.'; }
  else if (S.mode === 'manual'){
    const en = manualLangOf(S.man.key) === 'en';
    $('#whereTitle').textContent = `${en ? 'Student manual' : 'Manual del alumno'} · Lesson ${li.num}`;
    $('#whereSub').textContent = en ? `${courseLabel(li.course)} for Learners` : `${courseLabel(li.course)} para los alumnos`;
  }
  else { $('#whereTitle').textContent = `Lesson ${li.num} · ${li.title}`; $('#whereSub').textContent = `${courseLabel(li.course)} · ${li.lang === 'es' ? 'Spanish slides' : 'English slides'}${li.principle ? ' · ' + li.principle : ''}`; }
}
async function setMode(mode, page){
  if (!S.key || mode === S.mode) return false;
  if (act) endAction(true);
  stopLaser(); stopMomentum(); closePanels();
  if (mode === 'manual'){
    const mk = preferredManual();
    if (!mk){ toast('Add the student manual first: on the lessons screen, tap “Add slides or manuals”.'); return false; }
    if (!(await loadManual(mk))) return false;
    if (S.mode === mode) return false;
  }
  S.pos[S.mode] = { page:S.page, z:V.z, x:V.x, y:V.y };
  S.mode = mode;
  if (mode === 'pad') ensurePad();
  rebuildPages();
  layout(true);
  const saved = S.pos[mode];
  if (page != null){ S.page = clamp(page, 0, total() - 1); viewTo(S.page); }
  else if (saved){ S.page = clamp(saved.page, 0, total() - 1); V.z = saved.z; V.x = saved.x; V.y = saved.y; clampView(); }
  else { S.page = 0; viewTo(0); }
  crispCache = null;
  updateModeUI(); drawView(); updateRails(); prefetch();
  return true;
}
/* ---------- The student manual: English or Spanish ---------- */
const manualsFor = course => ['en','es'].map(l => manualKey(course, l)).filter(k => S.have.has(k));
/* The manual opens in the language you last picked; before that, in the language of the slides. */
function preferredManual(){
  const c = S.info.course, have = manualsFor(c);
  if (!have.length) return null;
  const want = manualKey(c, prefs.manualLang || S.info.lang);
  return have.includes(want) ? want : have[0];
}
async function loadManual(mk){
  if (S.man.key === mk && S.man.loaded) return true;
  stageMsg('Opening the manual…');
  try {
    Saver.flushNow();
    const [doc, data] = await Promise.all([loadPdf('manual', mk), Store.load(mk)]);
    const vp = (await doc.getPage(1)).getViewport({ scale:1 });
    if (S.man.key !== mk) S.hist.manual = { u:[], r:[] };   // undo steps belong to the manual they were made on
    S.man = { key:mk, n:doc.numPages, ink:data.ink || {}, aspect: vp.width / vp.height, loaded:true };
  } catch (e) { stageMsg(null); toast('The manual could not be opened. Try adding it again from the lessons screen.'); return false; }
  stageMsg(null);
  return true;
}
/* Both manuals have the same page layout, so switching language keeps you on the same page. */
async function switchManualLanguage(){
  const c = S.info.course, cur = manualLangOf(S.man.key), want = cur === 'en' ? 'es' : 'en', mk = manualKey(c, want);
  if (!S.have.has(mk)){ toast(`The ${langName(want)} ${c.toUpperCase()} manual is not on this iPad yet. Add it from the lessons screen.`); return; }
  if (act) endAction(true);
  stopLaser(); stopMomentum();
  const keep = { page:S.page, z:V.z, x:V.x, y:V.y };
  if (!(await loadManual(mk)) || S.mode !== 'manual') return;
  prefs.manualLang = want; savePrefs();
  rebuildPages(); layout(true);
  S.page = clamp(keep.page, 0, total() - 1); V.z = keep.z; V.x = keep.x; V.y = keep.y; clampView();
  crispCache = null;
  updateModeUI(); drawView(); updateRails(); prefetch();
  toast(`${langName(want)} manual`, 1200);
}

/* The Scratchpad and Manual buttons open that view, and tapping again goes back to where you were. */
async function toggleMode(mode){
  if (!S.key) return;
  if (S.mode === mode){ setMode(S.back && S.back !== mode ? S.back : 'slides'); return; }
  const from = S.mode;
  let page = null;
  if (mode === 'manual' && !S.pos.manual){ const r = manualRefs(); if (r) page = r.conv; }   // first time: this lesson's conversation group
  if (await setMode(mode, page)) S.back = from;
}
for (const b of document.querySelectorAll('.padBtn')) b.addEventListener('click', () => { toggleMode('pad'); bumpMini(); });
for (const b of document.querySelectorAll('.manBtn')) b.addEventListener('click', () => { toggleMode('manual'); bumpMini(); });

/* ---------- Switching between the English and Spanish slides ---------- */
function updateLangButtons(){
  const manual = S.mode === 'manual';
  const toEs = manual ? manualLangOf(S.man.key) === 'en' : !!(S.info && S.info.lang === 'en');
  for (const b of document.querySelectorAll('.langBtn')){
    b.replaceChildren(h('span', {class:'long', text: toEs ? 'Español' : 'English'}), h('span', {class:'short', text: toEs ? 'ES' : 'EN'}));
    b.setAttribute('aria-label', manual ? (toEs ? 'Show the Spanish manual' : 'Show the English manual') : (toEs ? 'Show this slide in Spanish' : 'Show this slide in English'));
  }
}
function switchLanguage(){
  if (S.key && S.mode === 'manual'){ switchManualLanguage(); return; }
  if (!S.key || S.mode !== 'slides') return;
  const other = otherLangKey(S.key), oi = info(other);
  if (!oi) return;
  if (!S.have.has(other)){ toast(`The ${oi.lang === 'es' ? 'Spanish' : 'English'} slides for this lesson are not on this iPad yet.`); return; }
  const map = PAIRS[S.key];
  const target = map && map[S.page] != null ? map[S.page] : S.page;
  Saver.flushNow();
  openLesson(other, clamp(target, 0, oi.n - 1));
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
for (const b of document.querySelectorAll('[data-tool]')) b.addEventListener('click', () => {
  if (b.dataset.tool !== 'eraser') prefs.prevTool = b.dataset.tool;
  prefs.tool = b.dataset.tool; savePrefs(); renderTools();
});

/* ---------- Present mode: only the pages show, for screen mirroring ---------- */
let miniTimer = 0, presentHinted = false;
function showMini(){ $('#mini').hidden = false; bumpMini(); }
function hideMini(){ $('#mini').hidden = true; clearTimeout(miniTimer); }
function bumpMini(){ clearTimeout(miniTimer); if (!$('#mini').hidden) miniTimer = setTimeout(hideMini, 4000); }
function toggleMini(){ $('#mini').hidden ? showMini() : hideMini(); }
$('#mini').addEventListener('pointerdown', bumpMini);
function setPresent(on){
  if (act) endAction(true);
  document.body.classList.toggle('presenting', on);
  closePanels(); hideMini(); stopLaser();
  layout(true); viewTo(S.page); drawView(); updateRails();
  if (on && !presentHinted){
    presentHinted = true;
    toast(prefs.tapEraser ? 'Presenting. Tap near the top for tools. Tap anywhere else to switch to the eraser and back.' : 'Presenting. Tap for tools, swipe or drag to move, pinch to zoom.');
  }
}
$('#presentBtn').addEventListener('click', () => setPresent(true));
$('#miniDone').addEventListener('click', () => setPresent(false));
$('#miniFit').addEventListener('click', () => { fitZoom(); bumpMini(); });

/* ---------- Thumbnails ---------- */
let thumbIO = null;
function buildThumbs(){
  const box = $('#thumbs');
  $('#drawerTitle').textContent = S.mode === 'manual' ? 'Manual pages' : S.mode === 'pad' ? 'Scratchpad pages' : 'All slides';
  if (thumbIO) thumbIO.disconnect();
  thumbIO = new IntersectionObserver(entries => { for (const en of entries) if (en.isIntersecting){ thumbIO.unobserve(en.target); paintThumb(en.target); } }, { root: box, rootMargin:'300px' });
  const items = [], ar = aspect().toFixed(4), r = S.mode === 'manual' ? manualRefs() : null;
  for (let i = 0; i < total(); i++){
    let label, tag = '';
    if (S.mode === 'slides'){ label = `Slide ${i + 1}`; const sec = S.info.sections.indexOf(i); if (sec >= 0) tag = ' · ' + SECTION_SHORT[sec]; }
    else {
      label = `Page ${i + 1}`;
      if (r && i === r.start) tag = ` · Lesson ${S.info.num}`;
      else if (r && i === r.conv) tag = ' · Conversation group';
    }
    items.push(h('button', {type:'button', class:'th', 'data-i': i, 'aria-current': String(i === S.page), onclick: () => { goto(i); closePanels(); }},
      h('span', {class:'pic', style:`aspect-ratio:${ar}`}, h('canvas', {class:'tp'}), h('canvas', {class:'ti'})),
      h('small', null, h('b', {text: label}), tag)));
  }
  box.replaceChildren(...items);
  for (const th of box.querySelectorAll('.th[data-i]')) thumbIO.observe(th);
  const cur = box.querySelector('[aria-current="true"]');
  if (cur){ const br = box.getBoundingClientRect(), rr = cur.getBoundingClientRect(); box.scrollTop += (rr.top - br.top) - (br.height - rr.height) / 2; }
}
async function paintThumb(th){
  const i = +th.dataset.i, tp = th.querySelector('.tp'), key = pk(i);
  const pic = th.querySelector('.pic'), cw = Math.max(1, Math.round(pic.clientWidth * L.dpr)), ch = Math.round(cw / aspect());
  tp.width = cw; tp.height = ch;
  const ctx = tp.getContext('2d');
  if (key[0] === 'b') drawBoard(ctx, { ox:0, oy:0, W:cw, H:ch });
  else {
    const tk = key + '@' + PDF[key[0] === 'm' ? 'manual' : 'lesson'].key;
    let c = thumbCache.get(tk);
    if (!c){ try { c = await renderPdfPage(key, cw, { keep:false }); } catch { c = null; } if (c) thumbCache.set(tk, c); }
    if (c) ctx.drawImage(c, 0, 0, cw, ch);
  }
  drawThumbInk(th, i);
}
function drawThumbInk(th, i){
  const ti = th.querySelector('.ti'), tp = th.querySelector('.tp');
  if (!tp.width) return;
  ti.width = tp.width; ti.height = tp.height;
  const ctx = ti.getContext('2d'); ctx.clearRect(0, 0, ti.width, ti.height);
  const key = pk(i);
  for (const s of (inkFor(key)[key] || [])) drawStroke(ctx, s, ti.width, ti.height, 1.8);
}

/* ---------- Panels & menu ---------- */
function closePanels(){ $('#drawer').hidden = true; $('#menu').hidden = true; resetClear(); }
$('#gridBtn').addEventListener('click', () => { const d = $('#drawer'); const open = d.hidden; closePanels(); if (open){ d.hidden = false; buildThumbs(); } });
$('#drawerClose').addEventListener('click', closePanels);
$('#moreBtn').addEventListener('click', () => { const m = $('#menu'); const open = m.hidden; closePanels(); if (open){ updateMenu(); m.hidden = false; } });

/* "Clear marks in this lesson": every slide of the open lesson (or the whole scratchpad, or this
   lesson's pages of the manual, depending on the view). Two taps to confirm, and Undo brings them back. */
function clearLabel(){
  if (S.mode === 'pad') return 'Clear the scratchpad';
  if (S.mode === 'manual') return `Clear marks on Lesson ${S.info ? S.info.num : ''} manual pages`;
  return 'Clear marks in this lesson';
}
function clearTargets(){
  if (S.mode === 'slides') return Object.keys(S.ink).filter(k => k[0] === 's' && S.ink[k].length);
  if (S.mode === 'pad') return Object.keys(S.ink).filter(k => k[0] === 'b' && S.ink[k].length);
  const r = manualRefs();
  return Object.keys(S.man.ink).filter(k => S.man.ink[k].length && (!r || (+k.slice(1) >= r.start && +k.slice(1) <= r.end)));
}
function resetClear(){ const b = $('#mClear'); b.dataset.armed = 'false'; $('#mClearLabel').textContent = clearLabel(); }
$('#mClear').addEventListener('click', () => {
  const b = $('#mClear'), keys = clearTargets();
  if (!keys.length){ toast(S.mode === 'pad' ? 'The scratchpad is already empty.' : S.mode === 'manual' ? 'There are no marks on this lesson’s manual pages.' : 'There are no marks in this lesson.'); return; }
  const what = S.mode === 'slides' ? `${keys.length} slide${keys.length === 1 ? '' : 's'}` : `${keys.length} page${keys.length === 1 ? '' : 's'}`;
  if (b.dataset.armed !== 'true'){ b.dataset.armed = 'true'; $('#mClearLabel').textContent = `Tap again to clear marks on ${what}. You can undo this.`; return; }
  const items = keys.map(k => [k, strokesFor(k).slice()]);
  for (const k of keys) strokesFor(k).length = 0;
  pushOp({ a:'clearMany', items });
  closePanels();
  if (S.mode === 'pad'){ S.boards = 2; rebuildPages(); layout(true); goto(0); }
  redrawInk();
  for (const k of keys) inkChanged(k);
  toast(`Cleared marks on ${what}. Tap Undo to bring them back.`);
});
function updateMenu(){
  $('#mFinger').setAttribute('aria-checked', String(!!prefs.fingerDraw));
  $('#mFingerSub').textContent = prefs.fingerDraw ? 'On: one finger draws like the pencil. Two fingers pinch and scroll.' : 'Off: fingers scroll, swipe and pinch, and a two-finger tap undoes. Apple Pencil always draws.';
  $('#mScroll').setAttribute('aria-checked', String(!!prefs.scroll));
  $('#mScrollSub').textContent = prefs.scroll ? 'On: pages are stacked; drag up and down to move through them.' : 'Off: one page at a time; swipe sideways to turn.';
  $('#mTap').setAttribute('aria-checked', String(!!prefs.tapEraser));
  $('#mTapSub').textContent = prefs.fingerDraw
    ? 'Works when “Draw with finger” is off. A quick one-finger tap then switches between your tool and the eraser.'
    : 'A quick one-finger tap switches between your tool and the eraser, like double-tapping the pencil in other apps.';
  setSave(Saver.timers.size || Saver.busy.size ? 'saving' : (Saver.errors ? 'error' : 'idle'));
}
$('#mFinger').addEventListener('click', () => { prefs.fingerDraw = !prefs.fingerDraw; savePrefs(); updateMenu(); });
$('#mTap').addEventListener('click', () => { prefs.tapEraser = !prefs.tapEraser; savePrefs(); updateMenu(); });
$('#mScroll').addEventListener('click', () => {
  prefs.scroll = !prefs.scroll; savePrefs(); updateMenu();
  layout(true); viewTo(S.page); drawView(); updateRails();
});

let toastTimer = 0;
function toast(msg, ms = 3800){ const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), ms); }
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
  Object.assign(S, { key, info:li, n:li.n, boards:2, page:0, ink:{}, mode:'slides', back:'slides', pos:{}, hist:newHist() });
  if (!S.man.key || !S.man.key.startsWith(manualKey(li.course))) S.man = { key:null, n:0, ink:{}, aspect:0.77, loaded:false };
  S.view = 'lesson';
  rebuildPages();
  $('#library').hidden = true; $('#lesson').hidden = false; document.body.classList.add('in-lesson');
  if (location.hash !== '#' + key) history.replaceState(null, '', '#' + key);
  updateModeUI(); renderTools(); updateRails(); updateLangButtons();
  layout(true); viewTo(0);
  pctx.setTransform(1, 0, 0, 1, 0, 0); pctx.clearRect(0, 0, pdfc.width, pdfc.height); ictx.clearRect(0, 0, inkc.width, inkc.height);
  stageMsg('Opening slides…');
  keepAwake();
  let data, err = null;
  try { [data] = await Promise.all([Store.load(key), loadPdf('lesson', key)]); }
  catch (e) { err = e; }
  if (S.key !== key) return;
  if (err){
    if (err.code === 'missing') stageMsg('This lesson’s slides are not on this iPad yet. Add them from the lessons screen.', 'Go to lessons', () => { showLibrary(); needSlides(); });
    else stageMsg(pdfjs ? 'These slides could not be opened. Try adding this lesson’s PDF again from the lessons screen.' : 'The slide viewer did not load. Close and reopen the app.', 'Go to lessons', showLibrary);
    return;
  }
  stageMsg(null);
  if (PDF.lesson.doc && PDF.lesson.doc.numPages) S.n = PDF.lesson.doc.numPages;
  S.ink = data.ink || {};
  S.boards = Math.max(2, (data.meta && data.meta.boards) || 0);
  ensurePad();
  rebuildPages();
  const start = page != null ? page : (data.meta && data.meta.last) || 0;
  S.page = -1;
  layout(true);
  goto(clamp(start, 0, S.n - 1));
  updateModeUI();
}
function showLibrary(){
  if (act) endAction(true);
  if (presenting()) document.body.classList.remove('presenting');
  stopLaser(); stopMomentum(); closePanels(); hideMini();
  Saver.flushNow();
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
  else if (k === 'p' || k === 'h' || k === 'e' || k === 'l'){ const t = { p:'pen', h:'hl', e:'eraser', l:'laser' }[k]; if (t !== 'eraser') prefs.prevTool = t; prefs.tool = t; savePrefs(); renderTools(); }
  else if (k === 's'){ toggleMode('pad'); }
  else if (k === 'm'){ toggleMode('manual'); }
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

/* Read-only hook for automated checks of zoom, scrolling and views. */
window.__cgsView = () => ({ z: V.z, x: V.x, y: V.y, page: S.page, mode: S.mode, total: total(), continuous: continuous(), boards: S.boards, tool: prefs.tool });

/* ---------- Boot ---------- */
(async function start(){
  setSave('idle');
  renderLibrary();
  await refreshLibrary();
  const k = location.hash.slice(1);
  if (info(k) && S.have.has(k)) openLesson(k);
})();
})();
