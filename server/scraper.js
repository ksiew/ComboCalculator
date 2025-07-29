var fs = require('fs')

const char = "Ed"
const table = `5	4	8	16	+4	-2	LH	Sp SA	14
5MP	600	8	5	15	27	+3(+5)	-3(-1)	LH	SA TC	18 SA / 18(20) TC
5HP	800	12	4	20	35	+2	-2	LH	TC	19
5LK	300	5	3	11	18	+2	-4	LH	Sp SA	13
5MK	500	6	4	13(15)	22(24)	+5	+1	LH	Sp SA TC	16
5HK	900	12	4	19	34	+2	-4	LH	-	
2LP	300	4	3	8	14	+5	-1	LH	Chn Sp SA	13
2MP	600	8	3	20	30	+1	-4	LH	Sp SA	15
2HP	400x2	9	3(4)3	20	38	+6	-7	LH	Sp SA (2nd)	26(13)
2LK	200	5	3	8	15	+3	-1	L	Chn	
2MK	600	9	3	16(18)	27(29)	+4	-4	L	TC	15
2HK	900	11	3	24	37	KD +31	-12	L	-	
j.LP	300	5	6	3 land	-	+5(+10)	+1(+6)	H	TC	
j.MP	700	8	5	3 land	-	+11(+13)	+5(+7)	H	TC	
j.HP	800	10	7	3 land	-	+9(+15)	+5(+11)	H	-	
j.LK	300	5	6	3 land	-	+2(+9)	-2(+5)	H	-	
j.MK	500	7	5	3 land	-	+9(+13)	+5(+9)	H	-	
j.HK	400x2	10	2(1)8	3 land	-	+11(+15)	+7(+11)	H,H	-	
6HP	900	16	4	20	39	+1	-4	LH	TC	21
6MK	600	20	3	19	41	+2	-2	H	TC	17
4HK	900	14	4	17(19)	34(36)	+3	-3	LH	-	
3HK	900	14	9	18(22)	40(44)	HKD +31(+39)	-10(-2)	L	-	
5MP~MP	400	17	5	20	41	-4 / -24 whiff	-10 / -30 whiff	LH	Sp SA	48~50 (17)
5HP~HP	400x2	17	4(3)4	17	44	KD +55(+45)	-3 / (-10/-23)	LH	-	
5MK~HK	400	12	3	24	38	KD +33	-8	LH	Sp SA	41
2MK~HK	400(320)	15	1	20(24)	35(39)	+4 / -18 (whiff)	-9* / -24 (whiff)	LH	Sp SA	41~42 (14*)
6HP~HP	500	13	3	26	41	-2	-11	LH	TC	43~49
6HP~HP~HP	370,380
(296,304)	7	3(5)3	27	44	KD +40	-16	LH	-	
6MK~MK	600	14	3	26	42	KD +29	-14	LH	-	
j.LP~j.MK	500	6	5	3 land	-	+12	+8	LH	-	
j.MP~j.HP	700	12	5	3 land	-	KD ~	-	-	-	`

/**
 * 0: input
 * 1: damage
 * 2: startup
 * 3: active
 * 4: recovery
 * 5: total
 * 6: hit adv
 * 7: block adv
 * 8: guard
 *  */ 
table.split("\n").forEach((str) => {
    const data = str.split("\t");
    const dict = {
        input: data[0],
        image: "ed.json",
        damage: data[1],
        onHit: data[6],
        onBlock: data[7]
    }
    const fileName = `data/SF6/${char}/${data[0]}.json`
    const dictstring = JSON.stringify(dict)
    fs.writeFile(fileName, dictstring, (err) => console.log());
})

