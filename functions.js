Aa = document.getElementById('Aa').value;
Ab = document.getElementById('Ab').value;
Ac = document.getElementById('Ac').value;
Ad = document.getElementById('Ad').value;
Ae = document.getElementById('Ae').value;
Af = document.getElementById('Af').value;
Ag = document.getElementById('Ag').value;
Ah = document.getElementById('Ah').value;
Ai = document.getElementById('Ai').value;

Ba = document.getElementById('Ba').value;
Bb = document.getElementById('Bb').value;
Bc = document.getElementById('Bc').value;
Bd = document.getElementById('Bd').value;
Be = document.getElementById('Be').value;
Bf = document.getElementById('Bf').value;
Bg = document.getElementById('Bg').value;
Bh = document.getElementById('Bh').value;
Bi = document.getElementById('Bi').value;

Ca = document.getElementById('Ca').value;
Cb = document.getElementById('Cb').value;
Cc = document.getElementById('Cc').value;
Cd = document.getElementById('Cd').value;
Ce = document.getElementById('Ce').value;
Cf = document.getElementById('Cf').value;
Cg = document.getElementById('Cg').value;
Ch = document.getElementById('Ch').value;
Ci = document.getElementById('Ci').value;

Da = document.getElementById('Da').value;
Db = document.getElementById('Db').value;
Dc = document.getElementById('Dc').value;
Dd = document.getElementById('Dd').value;
De = document.getElementById('De').value;
Df = document.getElementById('Df').value;
Dg = document.getElementById('Dg').value;
Dh = document.getElementById('Dh').value;
Di = document.getElementById('Di').value;

Ea = document.getElementById('Ea').value;
Eb = document.getElementById('Eb').value;
Ec = document.getElementById('Ec').value;
Ed = document.getElementById('Ed').value;
Ee = document.getElementById('Ee').value;
Ef = document.getElementById('Ef').value;
Eg = document.getElementById('Eg').value;
Eh = document.getElementById('Eh').value;
Ei = document.getElementById('Ei').value;

Fa = document.getElementById('Fa').value;
Fb = document.getElementById('Fb').value;
Fc = document.getElementById('Fc').value;
Fd = document.getElementById('Fd').value;
Fe = document.getElementById('Fe').value;
Ff = document.getElementById('Ff').value;
Fg = document.getElementById('Fg').value;
Fh = document.getElementById('Fh').value;
Fi = document.getElementById('Fi').value;

Ga = document.getElementById('Ga').value;
Gb = document.getElementById('Gb').value;
Gc = document.getElementById('Gc').value;
Gd = document.getElementById('Gd').value;
Ge = document.getElementById('Ge').value;
Gf = document.getElementById('Gf').value;
Gg = document.getElementById('Gg').value;
Gh = document.getElementById('Gh').value;
Gi = document.getElementById('Gi').value;

Ha = document.getElementById('Ha').value;
Hb = document.getElementById('Hb').value;
Hc = document.getElementById('Hc').value;
Hd = document.getElementById('Hd').value;
He = document.getElementById('He').value;
Hf = document.getElementById('Hf').value;
Hg = document.getElementById('Hg').value;
Hh = document.getElementById('Hh').value;
Hi = document.getElementById('Hi').value;

Ia = document.getElementById('Ia').value;
Ib = document.getElementById('Ib').value;
Ic = document.getElementById('Ic').value;
Id = document.getElementById('Id').value;
Ie = document.getElementById('Ie').value;
If = document.getElementById('If').value;
Ig = document.getElementById('Ig').value;
Ih = document.getElementById('Ih').value;
Ii = document.getElementById('Ii').value;




// a b c d e f g h i    horizontal
// A B C D E F G H I    verticals

//       a    b   c    d    e    f    g    h    i
//
//  A    Aa   Ab  Ac   Ad   Ae   Af   Ag   Ah   Ai
//  B    Ba   Bb  Bc   Bd   Be   Bf   Bg   Bh   Bi
//  C    Ca   Cb  Cc   Cd   Ce   Cf   Cg   Ch   Ci
//  D    Da   Db  Dc   Dd   De   Df   Dg   Dh   Di
//  E    Ea   Eb  Ec   Ed   Ee   Ef   Eg   Eh   Ei
//  F    Fa   Fb  Fc   Fd   Fe   Ff   Fg   Fh   Fi
//  G    Ga   Gb  Gc   Gd   Ge   Gf   Gg   Gh   Gi
//  H    Ha   Hb  Hc   Hd   He   Hf   Hg   Hh   Hi
//  I    Ia   Ib  Ic   Id   Ie   If   Ig   Ih   Ii



// Winning States Checker


//  SQUARE WINNING STATES
//  [S1][S2][S3]
//  [S4][S5][S6]
//  [S7][S8][S9]

const Square = {
    S1 : [(Aa, Ab, Ac), (Ba, Bb, Bc), (Ca, Cb, Cc)],
    S2 : [(Ad, Ae, Af), (Bd, Be, Bf), (Cd, Ce, Cf)],
    S3 : [(Ag, Ah, Ai), (Bg, Bh, Bi), (Cg, Ch, Ci)],

    S4 : [(Da, Db, Dc), (Ea, Eb, Ec), (Fa, Fb, Fc)],
    S5 : [(Dd, De, Df), (Ed, Ee, Ef), (Fd, Fe, Ff)],
    S6 : [(Dg, Dh, Di), (Eg, Eh, Ei), (Fg, Fh, Fi)],

    S7 : [(Ga, Gb, Gc), (Ha, Hb, Hc), (Ia, Ib, Ic)],
    S8 : [(Gd, Ge, Gf), (Hd, He, Hf), (Id, Ie, If)],
    S9 : [(Gg, Gh, Gi), (Hg, Hh, Hi), (Ig, Ih, Ii)]

};

//  VERTICAL WINNING STATES

const VLinear = [
    (Aa, Ba, Ca, Da, Ea, Fa, Ga, Ha, Ia),
    (Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib),
    (Ac, Bc, Cc, Dc, Ec, Fc, Gc, Hc, Ic),
    (Ad, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id),
    (Ae, Be, Ce, De, Ee, Fe, Ge, He, Ie),
    (Af, Bf, Cf, Df, Ef, Ff, Gf, Hf, If),
    (Ag, Bg, Cg, Dg, Eg, Fg, Gg, Hg, Ig),
    (Ah, Bh, Ch, Dh, Eh, Fh, Gh, Hh, Ih),
    (Ai, Bi, Ci, Di, Ei, Fi, Gi, Hi, Ii)

];

// HORIZONTAL WINNING STATES

const HLinear = [
    (Aa, Ab, Ac, Ad, Ae, Af, Ag, Ah, Ai),
    (Ba, Bb, Bc, Bd, Be, Bf, Bg, Bh, Bi),
    (Ca, Cb, Cc, Cd, Ce, Cf, Cg, Ch, Ci),
    (Da, Db, Dc, Dd, De, Df, Dg, Dh, Di),
    (Ea, Eb, Ec, Ed, Ee, Ef, Eg, Eh, Ei),
    (Fa, Fb, Fc, Fd, Fe, Ff, Fg, Fh, Fi),
    (Ga, Gb, Gc, Gd, Ge, Gf, Gg, Gh, Gi),
    (Ha, Hb, Hc, Hd, He, Hf, Hg, Hh, Hi),
    (Ia, Ib, Ic, Id, Ie, If, Ig, Ih, Ii)
];

// HORIZONTAL WIN CHECK

if (Aa != Ab != Ac != Ad != Ae != Af != Ag != Ah != Ai) {
    if (Ba != Bb != Bc != Bd != Be != Bf != Bg != Bh != Bi) {
        if (Ca != Cb != Cc != Cd != Ce != Cf != Cg != Ch != Ci) {
            if (Da != Db != Dc != Dd != De != Df != Dg != Dh != Di) {
                if (Ea != Eb != Ec != Ed != Ee != Ef != Eg != Eh != Ei) {
                    if (Fa != Fb != Fc != Fd != Fe != Ff != Fg != Fh != Fi) {
                        if (Ga != Gb != Gc != Gd != Ge != Gf != Gg != Gh != Gi) {
                            if (Ha != Hb != Hc != Hd != He != Hf != Hg != Hh != Hi) {
                                if (Ia != Ib != Ic != Id != Ie != If != Ig != Ih != Ii) {
                                    console.log("Horizontally OK");

                                    // VERTICAL WIN CHECK

                                    if (aA != aB != aC != aD != aE != aF != aG != aH != aI) {
                                        if (bA != bB != bC != bD != bE != bF != bG != bH != bI) {
                                            if (cA != cB != cC != cD != cE != cF != cG != cH != cI) {
                                                if (dA != dB != dC != dD != dE != dF != dG != dH != dI) {
                                                    if (eA != eB != eC != eD != eE != eF != eG != eH != eI) {
                                                        if (fA != fB != fC != fD != fE != fF != fG != fH != fI) {
                                                            if (gA != gB != gC != gD != gE != gF != gG != gH != gI) {
                                                                if (hA != hB != hC != hD != hE != hF != hG != hH != hI) {
                                                                    if (iA != iB != iC != iD != iE != iF != iG != iH != iI) {
                                                                        console.log("Vertically OK");

                                                                        // SQUARE WIN CHECK

                                                                        if (Aa != Ab != Ac != Ba != Bb != Bc != Ca != Cb != Cc) {
                                                                            if (Ad != Ae != Af != Bd != Be != Bf != Cd != Ce != Cf) {
                                                                                if (Ag != Ah != Ai != Bg != Bh != Bi != Cg != Ch != Ci) {
                                                                                    if (Da != Db != Dc != Ea != Eb != Ec != Fa != Fb != Fc) {
                                                                                        if (Dd != De != Df != Ed != Ee != Ef != Fd != Fe != Ff) {
                                                                                            if (Dg != Dh != Di != Eg != Eh != Ei != Fg != Fh != Fi) {
                                                                                                if (Ga != Gb != Gc != Ha != Hb != Hc != Ia != Ib != Ic) {
                                                                                                    if (Gd != Ge != Gf != Hd != He != Hf != Id != Ie != If) {
                                                                                                        if (Gg != Gh != Gi != Hg != Hh != Hi != Ig != Ih != Ii) {
                                                                                                            console.log("Winner !!");
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                        else{
                                                                            console.log("Eroor")
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else{
                                        console.log("Error")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
else{
    console.log("Error")
}