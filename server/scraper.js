var fs = require('fs')

const char = "Ed"
const table = `236P	400	14	12	8	33	+3	-5	LH	6P* SA3	16 (SA) / 20 (6P)
236PP	200x2	14	12	7	32	KD +43	-2	LH	6P* SA2 SA3	14 (SA) / 22 (6P)
236P~6P	600	12	-	30	42	+3	-8	LH	SA3	4
236PP~6P	400x2	12	-	28	40	KD +46~	-2	LH	SA2 SA3	10
623LP	900	10	8	23(28)	45(40)	KD +38	-13	LH	SA3	24*
623MP	1000	14	6	32	51	KD +39	-20	LH	SA3	22*
623HP	1200	16	6	33	54	KD +38	-21	LH	SA3	22*
623PP	800x2	13	6	36(41)	54	KD +18	-28	LH	-	
214LP	200x2,400 (800)	11	3(3)3(6)4	14	43	+3	-5	LH	SA3	30
214MP	250x2,400 (900)	13	2(7)3(9)3	16(24)	52(60)	KD +39	-12	LH	SA3	39
214HP	250x2,600 (1100)	15	2(11)2(6)2	23(26)	60(63)	KD +40	-12	LH	SA3	39
214PP	150x8,200 (1400)	13	1(4)1(3)1(3)
1(3)1(3)1(8)2	20	64	KD +42	-4	LH	SA2 SA3	61 / 85 (54 block)
236LK	800	11+5	4	26(24)	45(43)	+1	-6	LH	SA3 Sp*	7 SA / 17* KK
236[LK]	800,200	26+5	5	24	59~148	KD +61	+4	LH	SA3 (1st)	6
236MK	900	15+5	4	26(25)	49(48)	+3	-6	LH	SA3 Sp*	7 SA / 19* KK
236[MK]	800,200	30+5	5	24	63~148	KD +61	+4	LH	SA3 (1st)	6
236HK	800	12+5	8	18	42	KD +51(+63)	-	-	SA3 Sp*	7
236[HK]	800,200	30+5	10	19	63~148	KD +56(68)	-	-	SA3 (1st)	6
236KK	400x2
(600x2)	25	4	32	60	KD +61	+4	LH	SA2 SA3 (1st)	4
4KK	-	-	-	31	31	-	-	-	-	
5/6KK	-	-	-	31	31	-	-	-	6P*	
5/6KK~6P	600	11+11	3	20	33	KD +38	-4	LH	SA3	12
5/6KK~dl.6P	600	13+11	3	20	33	KD +50	-6	LH	SA3	12(10*)`

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
        startup: data[2],
        damage: data[1],
        onHit: data[6],
        onBlock: data[7]
    }
    if(!(data[0].includes("~") || data[0].includes("[") || data[0].includes("j."))){
        const fileName = `data/SF6/${char}/${data[0]}.json`
        const dictstring = JSON.stringify(dict)
        fs.writeFile(fileName, dictstring, (err) => console.log(err));
    }
})

