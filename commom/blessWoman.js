 var blessWoman = '沉鱼落雁&千娇百媚&明目皓齿&淡扫峨眉&清艳脱俗&香肌玉肤&美撼凡尘&聘婷秀雅&娥娜翩跹&俏丽多姿&风姿卓越&清丝纠缠&举步轻摇&剪水双瞳&美艳绝伦&乐善好施&助人为乐&古道热肠&雪中送炭&慷慨解囊&急公好义&乐于助人&无私奉献&神仙玉骨&如花似玉&红粉青娥&天生尤物&天仙化人&绝色美人&月里嫦娥&人面桃花&吃苦耐劳&默默无闻&一丝不苟&精益求精&兢兢业业&孜孜不倦&恪尽职守&实事求是&求真务实&天生丽质&妍资艳质&华如桃李&桃羞杏让&如花似月&羞花闭月&花容月貌&芙蓉如面&娇艳惊人&冠觉群芳&丰姿绰约&娉婷袅娜&亭亭玉立&声若莺啼&明眸皓齿&花容月貌&风华绝代&楚楚动人&冰清玉洁&气质清纯&容颜秀美&婉约可人&天生丽质&美丽大方&清秀大方&体态轻盈&气质高雅&知书达礼&仪态万千&艳冠群芳&楚楚动人&秀外慧中&风情万种&修养赞美&知书达理&温文尔雅&持之以恒&锲而不舍&光明磊落&兢兢业业&空谷幽兰&超凡脱俗&兰心蕙质&秀外慧中&风华绝代&发愤图强&奋发图强&奋发蹈厉&披荆斩棘&闻鸡起舞&矫若游龙&温婉娴淑&通情达理&端庄文雅&抱诚守真&表里如一&全心全意&落落大方&怀珠抱玉&温柔体贴';
 Array.prototype.distinct = function (){
     var arr = this,
         i,
         j,
         len = arr.length;
     for(i = 0; i < len; i++){
         for(j = i + 1; j < len; j++){
             if(arr[i] == arr[j]){
                 arr.splice(j,1);
                 len--;
                 j--;
             }
         }
     }
     return arr;
 };
export default blessWoman.split("&").distinct();