let Aa = document.getElementById('Aa').value;
let Ab = document.getElementById('Ab').value;
let Ac = document.getElementById('Ac').value;
let Ad = document.getElementById('Ad').value;
let Ae = document.getElementById('Ae').value;
let Af = document.getElementById('Af').value;
let Ag = document.getElementById('Ag').value;
let Ah = document.getElementById('Ah').value;
let Ai = document.getElementById('Ai').value;

let Ba = document.getElementById('Ba').value;
let Bb = document.getElementById('Bb').value;
let Bc = document.getElementById('Bc').value;
let Bd = document.getElementById('Bd').value;
let Be = document.getElementById('Be').value;
let Bf = document.getElementById('Bf').value;
let Bg = document.getElementById('Bg').value;
let Bh = document.getElementById('Bh').value;
let Bi = document.getElementById('Bi').value;

let Ca = document.getElementById('Ca').value;
let Cb = document.getElementById('Cb').value;
let Cc = document.getElementById('Cc').value;
let Cd = document.getElementById('Cd').value;
let Ce = document.getElementById('Ce').value;
let Cf = document.getElementById('Cf').value;
let Cg = document.getElementById('Cg').value;
let Ch = document.getElementById('Ch').value;
let Ci = document.getElementById('Ci').value;

let Da = document.getElementById('Da').value;
let Db = document.getElementById('Db').value;
let Dc = document.getElementById('Dc').value;
let Dd = document.getElementById('Dd').value;
let De = document.getElementById('De').value;
let Df = document.getElementById('Df').value;
let Dg = document.getElementById('Dg').value;
let Dh = document.getElementById('Dh').value;
let Di = document.getElementById('Di').value;

let Ea = document.getElementById('Ea').value;
let Eb = document.getElementById('Eb').value;
let Ec = document.getElementById('Ec').value;
let Ed = document.getElementById('Ed').value;
let Ee = document.getElementById('Ee').value;
let Ef = document.getElementById('Ef').value;
let Eg = document.getElementById('Eg').value;
let Eh = document.getElementById('Eh').value;
let Ei = document.getElementById('Ei').value;

let Fa = document.getElementById('Fa').value;
let Fb = document.getElementById('Fb').value;
let Fc = document.getElementById('Fc').value;
let Fd = document.getElementById('Fd').value;
let Fe = document.getElementById('Fe').value;
let Ff = document.getElementById('Ff').value;
let Fg = document.getElementById('Fg').value;
let Fh = document.getElementById('Fh').value;
let Fi = document.getElementById('Fi').value;

let Ga = document.getElementById('Ga').value;
let Gb = document.getElementById('Gb').value;
let Gc = document.getElementById('Gc').value;
let Gd = document.getElementById('Gd').value;
let Ge = document.getElementById('Ge').value;
let Gf = document.getElementById('Gf').value;
let Gg = document.getElementById('Gg').value;
let Gh = document.getElementById('Gh').value;
let Gi = document.getElementById('Gi').value;

let Ha = document.getElementById('Ha').value;
let Hb = document.getElementById('Hb').value;
let Hc = document.getElementById('Hc').value;
let Hd = document.getElementById('Hd').value;
let He = document.getElementById('He').value;
let Hf = document.getElementById('Hf').value;
let Hg = document.getElementById('Hg').value;
let Hh = document.getElementById('Hh').value;
let Hi = document.getElementById('Hi').value;

let Ia = document.getElementById('Ia').value;
let Ib = document.getElementById('Ib').value;
let Ic = document.getElementById('Ic').value;
let Id = document.getElementById('Id').value;
let Ie = document.getElementById('Ie').value;
let If = document.getElementById('If').value;
let Ig = document.getElementById('Ig').value;
let Ih = document.getElementById('Ih').value;
let Ii = document.getElementById('Ii').value;

// Write all Columns in Column check function

function Vertical(){
    // Column A
    Aa = (![Ba, Ca, Da, Ea, Fa, Ga, Ha, Ia].includes(Aa)) ? "Unique" : "Similar";
    Ba = (![Aa, Ca, Da, Ea, Fa, Ga, Ha, Ia].includes(Ba)) ? "Unique" : "Similar";
    Ca = (![Aa, Ba, Da, Ea, Fa, Ga, Ha, Ia].includes(Ca)) ? "Unique" : "Similar";
    Da = (![Aa, Ba, Ca, Ea, Fa, Ga, Ha, Ia].includes(Da)) ? "Unique" : "Similar";
    Ea = (![Aa, Ba, Ca, Da, Fa, Ga, Ha, Ia].includes(Ea)) ? "Unique" : "Similar";
    Fa = (![Aa, Ba, Ca, Da, Ea, Ga, Ha, Ia].includes(Fa)) ? "Unique" : "Similar";
    Ga = (![Aa, Ba, Ca, Da, Ea, Fa, Ha, Ia].includes(Ga)) ? "Unique" : "Similar";
    Ha = (![Aa, Ba, Ca, Da, Ea, Fa, Ga, Ia].includes(Ha)) ? "Unique" : "Similar";
    Ia = (![Aa, Ba, Ca, Da, Ea, Fa, Ga, Ha].includes(Ia)) ? "Unique" : "Similar";
    C1 = [Aa, Ba, Ca, Da, Ea, Fa, Ga, Ha, Ia].includes("Unique") ? "CWin" : "CLos";

    // Column B
    Ab = (![Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib].includes(Ab)) ? "Unique" : "Similar";
    Bb = (![Ab, Cb, Db, Eb, Fb, Gb, Hb, Ib].includes(Bb)) ? "Unique" : "Similar";
    Cb = (![Ab, Bb, Db, Eb, Fb, Gb, Hb, Ib].includes(Cb)) ? "Unique" : "Similar";
    Db = (![Ab, Bb, Cb, Eb, Fb, Gb, Hb, Ib].includes(Db)) ? "Unique" : "Similar";
    Eb = (![Ab, Bb, Cb, Db, Fb, Gb, Hb, Ib].includes(Eb)) ? "Unique" : "Similar";
    Fb = (![Ab, Bb, Cb, Db, Eb, Gb, Hb, Ib].includes(Fb)) ? "Unique" : "Similar";
    Gb = (![Ab, Bb, Cb, Db, Eb, Fb, Hb, Ib].includes(Gb)) ? "Unique" : "Similar";
    Hb = (![Ab, Bb, Cb, Db, Eb, Fb, Gb, Ib].includes(Hb)) ? "Unique" : "Similar";
    Ib = (![Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb].includes(Ib)) ? "Unique" : "Similar";
    C2 = [Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib].includes("Unique") ? "CWin" : "CLos";

    // Column C
    Ac = (![Bc, Cc, Dc, Ec, Fc, Gc, Hc, Ic].includes(Ac)) ? "Unique" : "Similar";
    Bc = (![Ac, Cc, Dc, Ec, Fc, Gc, Hc, Ic].includes(Bc)) ? "Unique" : "Similar";
    Cc = (![Ac, Bc, Dc, Ec, Fc, Gc, Hc, Ic].includes(Cc)) ? "Unique" : "Similar";
    Dc = (![Ac, Bc, Cc, Ec, Fc, Gc, Hc, Ic].includes(Dc)) ? "Unique" : "Similar";
    Ec = (![Ac, Bc, Cc, Dc, Fc, Gc, Hc, Ic].includes(Ec)) ? "Unique" : "Similar";
    Fc = (![Ac, Bc, Cc, Dc, Ec, Gc, Hc, Ic].includes(Fc)) ? "Unique" : "Similar";
    Gc = (![Ac, Bc, Cc, Dc, Ec, Fc, Hc, Ic].includes(Gc)) ? "Unique" : "Similar";
    Hc = (![Ac, Bc, Cc, Dc, Ec, Fc, Gc, Ic].includes(Hc)) ? "Unique" : "Similar";
    Ic = (![Ac, Bc, Cc, Dc, Ec, Fc, Gc, Hc].includes(Ic)) ? "Unique" : "Similar";
    C3 = [Ac, Bc, Cc, Dc, Ec, Fc, Gc, Hc, Ic].includes("Unique") ? "CWin" : "CLos";

    // Column D
    Ad = (![Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id].includes(Ad)) ? "Unique" : "Similar";
    Bd = (![Ad, Cd, Dd, Ed, Fd, Gd, Hd, Id].includes(Bd)) ? "Unique" : "Similar";
    Cd = (![Ad, Bd, Dd, Ed, Fd, Gd, Hd, Id].includes(Cd)) ? "Unique" : "Similar";
    Dd = (![Ad, Bd, Cd, Ed, Fd, Gd, Hd, Id].includes(Dd)) ? "Unique" : "Similar";
    Ed = (![Ad, Bd, Cd, Dd, Fd, Gd, Hd, Id].includes(Ed)) ? "Unique" : "Similar";
    Fd = (![Ad, Bd, Cd, Dd, Ed, Gd, Hd, Id].includes(Fd)) ? "Unique" : "Similar";
    Gd = (![Ad, Bd, Cd, Dd, Ed, Fd, Hd, Id].includes(Gd)) ? "Unique" : "Similar";
    Hd = (![Ad, Bd, Cd, Dd, Ed, Fd, Gd, Id].includes(Hd)) ? "Unique" : "Similar";
    Id = (![Ad, Bd, Cd, Dd, Ed, Fd, Gd, Hd].includes(Id)) ? "Unique" : "Similar";
    C4 = [Ad, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id].includes("Unique") ? "CWin" : "CLos";

    // Column E
    Ae = (![Be, Ce, De, Ee, Fe, Ge, He, Ie].includes(Ae)) ? "Unique" : "Similar";
    Be = (![Ae, Ce, De, Ee, Fe, Ge, He, Ie].includes(Be)) ? "Unique" : "Similar";
    Ce = (![Ae, Be, De, Ee, Fe, Ge, He, Ie].includes(Ce)) ? "Unique" : "Similar";
    De = (![Ae, Be, Ce, Ee, Fe, Ge, He, Ie].includes(De)) ? "Unique" : "Similar";
    Ee = (![Ae, Be, Ce, De, Fe, Ge, He, Ie].includes(Ee)) ? "Unique" : "Similar";
    Fe = (![Ae, Be, Ce, De, Ee, Ge, He, Ie].includes(Fe)) ? "Unique" : "Similar";
    Ge = (![Ae, Be, Ce, De, Ee, Fe, He, Ie].includes(Ge)) ? "Unique" : "Similar";
    He = (![Ae, Be, Ce, De, Ee, Fe, Ge, Ie].includes(He)) ? "Unique" : "Similar";
    Ie = (![Ae, Be, Ce, De, Ee, Fe, Ge, He].includes(Ie)) ? "Unique" : "Similar";
    C5 = [Ae, Be, Ce, De, Ee, Fe, Ge, He, Ie].includes("Unique") ? "CWin" : "CLos";

    // Column F
    Af = (![Bf, Cf, Df, Ef, Ff, Gf, Hf, If].includes(Af)) ? "Unique" : "Similar";
    Bf = (![Af, Cf, Df, Ef, Ff, Gf, Hf, If].includes(Bf)) ? "Unique" : "Similar";
    Cf = (![Af, Bf, Df, Ef, Ff, Gf, Hf, If].includes(Cf)) ? "Unique" : "Similar";
    Df = (![Af, Bf, Cf, Ef, Ff, Gf, Hf, If].includes(Df)) ? "Unique" : "Similar";
    Ef = (![Af, Bf, Cf, Df, Ff, Gf, Hf, If].includes(Ef)) ? "Unique" : "Similar";
    Ff = (![Af, Bf, Cf, Df, Ef, Gf, Hf, If].includes(Ff)) ? "Unique" : "Similar";
    Gf = (![Af, Bf, Cf, Df, Ef, Ff, Hf, If].includes(Gf)) ? "Unique" : "Similar";
    Hf = (![Af, Bf, Cf, Df, Ef, Ff, Gf, If].includes(Hf)) ? "Unique" : "Similar";
    If = (![Af, Bf, Cf, Df, Ef, Ff, Gf, Hf].includes(If)) ? "Unique" : "Similar";
    C6 = [Af, Bf, Cf, Df, Ef, Ff, Gf, Hf, If].includes("Unique") ? "CWin" : "CLos";

    // Column G
    Ag = (![Bg, Cg, Dg, Eg, Fg, Gg, Hg, Ig].includes(Ag)) ? "Unique" : "Similar";
    Bg = (![Ag, Cg, Dg, Eg, Fg, Gg, Hg, Ig].includes(Bg)) ? "Unique" : "Similar";
    Cg = (![Ag, Bg, Dg, Eg, Fg, Gg, Hg, Ig].includes(Cg)) ? "Unique" : "Similar";
    Dg = (![Ag, Bg, Cg, Eg, Fg, Gg, Hg, Ig].includes(Dg)) ? "Unique" : "Similar";
    Eg = (![Ag, Bg, Cg, Dg, Fg, Gg, Hg, Ig].includes(Eg)) ? "Unique" : "Similar";
    Fg = (![Ag, Bg, Cg, Dg, Eg, Gg, Hg, Ig].includes(Fg)) ? "Unique" : "Similar";
    Gg = (![Ag, Bg, Cg, Dg, Eg, Fg, Hg, Ig].includes(Gg)) ? "Unique" : "Similar";
    Hg = (![Ag, Bg, Cg, Dg, Eg, Fg, Gg, Ig].includes(Hg)) ? "Unique" : "Similar";
    Ig = (![Ag, Bg, Cg, Dg, Eg, Fg, Gg, Hg].includes(Ig)) ? "Unique" : "Similar";
    C7 = [Ag, Bg, Cg, Dg, Eg, Fg, Gg, Hg, Ig].includes("Unique") ? "CWin" : "CLos";

    // Column H
    Ah = (![Bh, Ch, Dh, Eh, Fh, Gh, Hh, Ih].includes(Ah)) ? "Unique" : "Similar";
    Bh = (![Ah, Ch, Dh, Eh, Fh, Gh, Hh, Ih].includes(Bh)) ? "Unique" : "Similar";
    Ch = (![Ah, Bh, Dh, Eh, Fh, Gh, Hh, Ih].includes(Ch)) ? "Unique" : "Similar";
    Dh = (![Ah, Bh, Ch, Eh, Fh, Gh, Hh, Ih].includes(Dh)) ? "Unique" : "Similar";
    Eh = (![Ah, Bh, Ch, Dh, Fh, Gh, Hh, Ih].includes(Eh)) ? "Unique" : "Similar";
    Fh = (![Ah, Bh, Ch, Dh, Eh, Gh, Hh, Ih].includes(Fh)) ? "Unique" : "Similar";
    Gh = (![Ah, Bh, Ch, Dh, Eh, Fh, Hh, Ih].includes(Gh)) ? "Unique" : "Similar";
    Hh = (![Ah, Bh, Ch, Dh, Eh, Fh, Gh, Ih].includes(Hh)) ? "Unique" : "Similar";
    Ih = (![Ah, Bh, Ch, Dh, Eh, Fh, Gh, Hh].includes(Ih)) ? "Unique" : "Similar";
    C8 = [Ah, Bh, Ch, Dh, Eh, Fh, Gh, Hh, Ih].includes("Unique") ? "CWin" : "CLos";

    // Column I
    Ai = (![Bi, Ci, Di, Ei, Fi, Gi, Hi, Ii].includes(Ai)) ? "Unique" : "Similar";
    Bi = (![Ai, Ci, Di, Ei, Fi, Gi, Hi, Ii].includes(Bi)) ? "Unique" : "Similar";
    Ci = (![Ai, Bi, Di, Ei, Fi, Gi, Hi, Ii].includes(Ci)) ? "Unique" : "Similar";
    Di = (![Ai, Bi, Ci, Ei, Fi, Gi, Hi, Ii].includes(Di)) ? "Unique" : "Similar";
    Ei = (![Ai, Bi, Ci, Di, Fi, Gi, Hi, Ii].includes(Ei)) ? "Unique" : "Similar";
    Fi = (![Ai, Bi, Ci, Di, Ei, Gi, Hi, Ii].includes(Fi)) ? "Unique" : "Similar";
    Gi = (![Ai, Bi, Ci, Di, Ei, Fi, Hi, Ii].includes(Gi)) ? "Unique" : "Similar";
    Hi = (![Ai, Bi, Ci, Di, Ei, Fi, Gi, Ii].includes(Hi)) ? "Unique" : "Similar";
    Ii = (![Ai, Bi, Ci, Di, Ei, Fi, Gi, Hi].includes(Ii)) ? "Unique" : "Similar";
    C9 = [Ai, Bi, Ci, Di, Ei, Fi, Gi, Hi, Ii].includes("Unique") ? "CWin" : "CLos";



    var Winner = 0;
    if(C1 == C2 == C3 == C4 == C5 == C6 == C7 == C8 == C9 == 'CWin'){
        VWinner = 1;
        console.log("Column Test Passed");
    }
}

function Horizontal(){
    // Row A
    Aa = (![Ab, Ac, Ad, Ae, Af, Ag, Ah, Ai].includes(Aa)) ? "Unique" : "Similar";
    Ab = (![Aa, Ac, Ad, Ae, Af, Ag, Ah, Ai].includes(Ab)) ? "Unique" : "Similar";
    Ac = (![Aa, Ab, Ad, Ae, Af, Ag, Ah, Ai].includes(Ac)) ? "Unique" : "Similar";
    Ad = (![Aa, Ab, Ac, Ae, Af, Ag, Ah, Ai].includes(Ad)) ? "Unique" : "Similar";
    Ae = (![Aa, Ab, Ac, Ad, Af, Ag, Ah, Ai].includes(Ae)) ? "Unique" : "Similar";
    Af = (![Aa, Ab, Ac, Ad, Ae, Ag, Ah, Ai].includes(Af)) ? "Unique" : "Similar";
    Ag = (![Aa, Ab, Ac, Ad, Ae, Af, Ah, Ai].includes(Ag)) ? "Unique" : "Similar";
    Ah = (![Aa, Ab, Ac, Ad, Ae, Af, Ag, Ai].includes(Ah)) ? "Unique" : "Similar";
    Ai = (![Aa, Ab, Ac, Ad, Ae, Af, Ag, Ah].includes(Ai)) ? "Unique" : "Similar";
    R1 = [Aa, Ab, Ac, Ad, Ae, Af, Ag, Ah, Ai].includes("Unique") ? "RWin" : "RLos";

    // Row B
    Ba = (![Bb, Bc, Bd, Be, Bf, Bg, Bh, Bi].includes(Ba)) ? "Unique" : "Similar";
    Bb = (![Ba, Bc, Bd, Be, Bf, Bg, Bh, Bi].includes(Bb)) ? "Unique" : "Similar";
    Bc = (![Ba, Bb, Bd, Be, Bf, Bg, Bh, Bi].includes(Bc)) ? "Unique" : "Similar";
    Bd = (![Ba, Bb, Bc, Be, Bf, Bg, Bh, Bi].includes(Bd)) ? "Unique" : "Similar";
    Be = (![Ba, Bb, Bc, Bd, Bf, Bg, Bh, Bi].includes(Be)) ? "Unique" : "Similar";
    Bf = (![Ba, Bb, Bc, Bd, Be, Bg, Bh, Bi].includes(Bf)) ? "Unique" : "Similar";
    Bg = (![Ba, Bb, Bc, Bd, Be, Bf, Bh, Bi].includes(Bg)) ? "Unique" : "Similar";
    Bh = (![Ba, Bb, Bc, Bd, Be, Bf, Bg, Bi].includes(Bh)) ? "Unique" : "Similar";
    Bi = (![Ba, Bb, Bc, Bd, Be, Bf, Bg, Bh].includes(Bi)) ? "Unique" : "Similar";
    R2 = [Ba, Bb, Bc, Bd, Be, Bf, Bg, Bh, Bi].includes("Unique") ? "RWin" : "RLos";

    // Row C
    Ca = (![Cb, Cc, Cd, Ce, Cf, Cg, Ch, Ci].includes(Ca)) ? "Unique" : "Similar";
    Cb = (![Ca, Cc, Cd, Ce, Cf, Cg, Ch, Ci].includes(Cb)) ? "Unique" : "Similar";
    Cc = (![Ca, Cb, Cd, Ce, Cf, Cg, Ch, Ci].includes(Cc)) ? "Unique" : "Similar";
    Cd = (![Ca, Cb, Cc, Ce, Cf, Cg, Ch, Ci].includes(Cd)) ? "Unique" : "Similar";
    Ce = (![Ca, Cb, Cc, Cd, Cf, Cg, Ch, Ci].includes(Ce)) ? "Unique" : "Similar";
    Cf = (![Ca, Cb, Cc, Cd, Ce, Cg, Ch, Ci].includes(Cf)) ? "Unique" : "Similar";
    Cg = (![Ca, Cb, Cc, Cd, Ce, Cf, Ch, Ci].includes(Cg)) ? "Unique" : "Similar";
    Ch = (![Ca, Cb, Cc, Cd, Ce, Cf, Cg, Ci].includes(Ch)) ? "Unique" : "Similar";
    Ci = (![Ca, Cb, Cc, Cd, Ce, Cf, Cg, Ch].includes(Ci)) ? "Unique" : "Similar";
    R3 = [Ca, Cb, Cc, Cd, Ce, Cf, Cg, Ch, Ci].includes("Unique") ? "RWin" : "RLos";

    // Row D
    Da = (![Db, Dc, Dd, De, Df, Dg, Dh, Di].includes(Da)) ? "Unique" : "Similar";
    Db = (![Da, Dc, Dd, De, Df, Dg, Dh, Di].includes(Db)) ? "Unique" : "Similar";
    Dc = (![Da, Db, Dd, De, Df, Dg, Dh, Di].includes(Dc)) ? "Unique" : "Similar";
    Dd = (![Da, Db, Dc, De, Df, Dg, Dh, Di].includes(Dd)) ? "Unique" : "Similar";
    De = (![Da, Db, Dc, Dd, Df, Dg, Dh, Di].includes(De)) ? "Unique" : "Similar";
    Df = (![Da, Db, Dc, Dd, De, Dg, Dh, Di].includes(Df)) ? "Unique" : "Similar";
    Dg = (![Da, Db, Dc, Dd, De, Df, Dh, Di].includes(Dg)) ? "Unique" : "Similar";
    Dh = (![Da, Db, Dc, Dd, De, Df, Dg, Di].includes(Dh)) ? "Unique" : "Similar";
    Di = (![Da, Db, Dc, Dd, De, Df, Dg, Dh].includes(Di)) ? "Unique" : "Similar";
    R4 = [Da, Db, Dc, Dd, De, Df, Dg, Dh, Di].includes("Unique") ? "RWin" : "RLos";

    // Row E
    Ea = (![Eb, Ec, Ed, Ee, Ef, Eg, Eh, Ei].includes(Ea)) ? "Unique" : "Similar";
    Eb = (![Ea, Ec, Ed, Ee, Ef, Eg, Eh, Ei].includes(Eb)) ? "Unique" : "Similar";
    Ec = (![Ea, Eb, Ed, Ee, Ef, Eg, Eh, Ei].includes(Ec)) ? "Unique" : "Similar";
    Ed = (![Ea, Eb, Ec, Ee, Ef, Eg, Eh, Ei].includes(Ed)) ? "Unique" : "Similar";
    Ee = (![Ea, Eb, Ec, Ed, Ef, Eg, Eh, Ei].includes(Ee)) ? "Unique" : "Similar";
    Ef = (![Ea, Eb, Ec, Ed, Ee, Eg, Eh, Ei].includes(Ef)) ? "Unique" : "Similar";
    Eg = (![Ea, Eb, Ec, Ed, Ee, Ef, Eh, Ei].includes(Eg)) ? "Unique" : "Similar";
    Eh = (![Ea, Eb, Ec, Ed, Ee, Ef, Eg, Ei].includes(Eh)) ? "Unique" : "Similar";
    Ei = (![Ea, Eb, Ec, Ed, Ee, Ef, Eg, Eh].includes(Ei)) ? "Unique" : "Similar";
    R5 = [Ea, Eb, Ec, Ed, Ee, Ef, Eg, Eh, Ei].includes("Unique") ? "RWin" : "RLos";

    // Row F
    Fa = (![Fb, Fc, Fd, Fe, Ff, Fg, Fh, Fi].includes(Fa)) ? "Unique" : "Similar";
    Fb = (![Fa, Fc, Fd, Fe, Ff, Fg, Fh, Fi].includes(Fb)) ? "Unique" : "Similar";
    Fc = (![Fa, Fb, Fd, Fe, Ff, Fg, Fh, Fi].includes(Fc)) ? "Unique" : "Similar";
    Fd = (![Fa, Fb, Fc, Fe, Ff, Fg, Fh, Fi].includes(Fd)) ? "Unique" : "Similar";
    Fe = (![Fa, Fb, Fc, Fd, Ff, Fg, Fh, Fi].includes(Fe)) ? "Unique" : "Similar";
    Ff = (![Fa, Fb, Fc, Fd, Fe, Fg, Fh, Fi].includes(Ff)) ? "Unique" : "Similar";
    Fg = (![Fa, Fb, Fc, Fd, Fe, Ff, Fh, Fi].includes(Fg)) ? "Unique" : "Similar";
    Fh = (![Fa, Fb, Fc, Fd, Fe, Ff, Fg, Fi].includes(Fh)) ? "Unique" : "Similar";
    Fi = (![Fa, Fb, Fc, Fd, Fe, Ff, Fg, Fh].includes(Fi)) ? "Unique" : "Similar";
    R6 = [Fa, Fb, Fc, Fd, Fe, Ff, Fg, Fh, Fi].includes("Unique") ? "RWin" : "RLos";

    // Row G
    Ga = (![Gb, Gc, Gd, Ge, Gf, Gg, Gh, Gi].includes(Ga)) ? "Unique" : "Similar";
    Gb = (![Ga, Gc, Gd, Ge, Gf, Gg, Gh, Gi].includes(Gb)) ? "Unique" : "Similar";
    Gc = (![Ga, Gb, Gd, Ge, Gf, Gg, Gh, Gi].includes(Gc)) ? "Unique" : "Similar";
    Gd = (![Ga, Gb, Gc, Ge, Gf, Gg, Gh, Gi].includes(Gd)) ? "Unique" : "Similar";
    Ge = (![Ga, Gb, Gc, Gd, Gf, Gg, Gh, Gi].includes(Ge)) ? "Unique" : "Similar";
    Gf = (![Ga, Gb, Gc, Gd, Ge, Gg, Gh, Gi].includes(Gf)) ? "Unique" : "Similar";
    Gg = (![Ga, Gb, Gc, Gd, Ge, Gf, Gh, Gi].includes(Gg)) ? "Unique" : "Similar";
    Gh = (![Ga, Gb, Gc, Gd, Ge, Gf, Gg, Gi].includes(Gh)) ? "Unique" : "Similar";
    Gi = (![Ga, Gb, Gc, Gd, Ge, Gf, Gg, Gh].includes(Gi)) ? "Unique" : "Similar";
    R7 = [Ga, Gb, Gc, Gd, Ge, Gf, Gg, Gh, Gi].includes("Unique") ? "RWin" : "RLos";

    // Row H
    Ha = (![Hb, Hc, Hd, He, Hf, Hg, Hh, Hi].includes(Ha)) ? "Unique" : "Similar";
    Hb = (![Ha, Hc, Hd, He, Hf, Hg, Hh, Hi].includes(Hb)) ? "Unique" : "Similar";
    Hc = (![Ha, Hb, Hd, He, Hf, Hg, Hh, Hi].includes(Hc)) ? "Unique" : "Similar";
    Hd = (![Ha, Hb, Hc, He, Hf, Hg, Hh, Hi].includes(Hd)) ? "Unique" : "Similar";
    He = (![Ha, Hb, Hc, Hd, Hf, Hg, Hh, Hi].includes(He)) ? "Unique" : "Similar";
    Hf = (![Ha, Hb, Hc, Hd, He, Hg, Hh, Hi].includes(Hf)) ? "Unique" : "Similar";
    Hg = (![Ha, Hb, Hc, Hd, He, Hf, Hh, Hi].includes(Hg)) ? "Unique" : "Similar";
    Hh = (![Ha, Hb, Hc, Hd, He, Hf, Hg, Hi].includes(Hh)) ? "Unique" : "Similar";
    Hi = (![Ha, Hb, Hc, Hd, He, Hf, Hg, Hh].includes(Hi)) ? "Unique" : "Similar";
    R8 = [Ha, Hb, Hc, Hd, He, Hf, Hg, Hh, Hi].includes("Unique") ? "RWin" : "RLos";

    // Row I
    Ia = (![Ib, Ic, Id, Ie, If, Ig, Ih, Ii].includes(Ia)) ? "Unique" : "Similar";
    Ib = (![Ia, Ic, Id, Ie, If, Ig, Ih, Ii].includes(Ib)) ? "Unique" : "Similar";
    Ic = (![Ia, Ib, Id, Ie, If, Ig, Ih, Ii].includes(Ic)) ? "Unique" : "Similar";
    Id = (![Ia, Ib, Ic, Ie, If, Ig, Ih, Ii].includes(Id)) ? "Unique" : "Similar";
    Ie = (![Ia, Ib, Ic, Id, If, Ig, Ih, Ii].includes(Ie)) ? "Unique" : "Similar";
    If = (![Ia, Ib, Ic, Id, Ie, Ig, Ih, Ii].includes(If)) ? "Unique" : "Similar";
    Ig = (![Ia, Ib, Ic, Id, Ie, If, Ih, Ii].includes(Ig)) ? "Unique" : "Similar";
    Ih = (![Ia, Ib, Ic, Id, Ie, If, Ig, Ii].includes(Ih)) ? "Unique" : "Similar";
    Ii = (![Ia, Ib, Ic, Id, Ie, If, Ig, Ih].includes(Ii)) ? "Unique" : "Similar";
    R9 = [Ia, Ib, Ic, Id, Ie, If, Ig, Ih, Ii].includes("Unique") ? "RWin" : "RLos";


    var Winner = 0;
    if(R1 == R2 == R3 == R4 == R5 == R6 == R7 == R8 == R9 == 'RWin'){
        HWinner = 1;
        console.log("Row test Passed");
    }
}

function Square(){
        
    // S1
    // [Aa Ab Ac]
    // [Ba Bb Bc]
    // [Ca Cb Cc]

    Aa = (![Ab, Ac, Ba, Bb, Bc, Ca, Cb, Cc].includes(Aa)) ? "Unique" : "Similar";
    Ab = (![Aa, Ac, Ba, Bb, Bc, Ca, Cb, Cc].includes(Ab)) ? "Unique" : "Similar";
    Ac = (![Aa, Ab, Ba, Bb, Bc, Ca, Cb, Cc].includes(Ac)) ? "Unique" : "Similar";
    Ba = (![Aa, Ab, Ac, Bb, Bc, Ca, Cb, Cc].includes(Ba)) ? "Unique" : "Similar";
    Bb = (![Aa, Ab, Ac, Ba, Bc, Ca, Cb, Cc].includes(Bb)) ? "Unique" : "Similar";
    Bc = (![Aa, Ab, Ac, Ba, Bb, Ca, Cb, Cc].includes(Bc)) ? "Unique" : "Similar";
    Ca = (![Aa, Ab, Ac, Ba, Bb, Bc, Cb, Cc].includes(Ca)) ? "Unique" : "Similar";
    Cb = (![Aa, Ab, Ac, Ba, Bb, Bc, Ca, Cc].includes(Cb)) ? "Unique" : "Similar";
    Cc = (![Aa, Ab, Ac, Ba, Bb, Bc, Ca, Cb].includes(Cc)) ? "Unique" : "Similar";
    S1 = ([Aa, Ab, Ac, Ba, Bb, Bc, Ca, Cb, Cc]).includes("Unique") ? "SWin" : "SLos";

    // S2
    // [Ad Ae Af]
    // [Bd Be Bf]
    // [Cd Ce Cf]

    Ad = (![Ae, Af, Bd, Be, Bf, Cd, Ce, Cf].includes(Ad)) ? "Unique" : "Similar";
    Ae = (![Ad, Af, Bd, Be, Bf, Cd, Ce, Cf].includes(Ae)) ? "Unique" : "Similar";
    Af = (![Ad, Ae, Bd, Be, Bf, Cd, Ce, Cf].includes(Af)) ? "Unique" : "Similar";
    Bd = (![Ad, Ae, Af, Be, Bf, Cd, Ce, Cf].includes(Bd)) ? "Unique" : "Similar";
    Be = (![Ad, Ae, Af, Bd, Bf, Cd, Ce, Cf].includes(Be)) ? "Unique" : "Similar";
    Bf = (![Ad, Ae, Af, Bd, Be, Cd, Ce, Cf].includes(Bf)) ? "Unique" : "Similar";
    Cd = (![Ad, Ae, Af, Bd, Be, Bf, Ce, Cf].includes(Cd)) ? "Unique" : "Similar";
    Ce = (![Ad, Ae, Af, Bd, Be, Bf, Cd, Cf].includes(Ce)) ? "Unique" : "Similar";
    Cf = (![Ad, Ae, Af, Bd, Be, Bf, Cd, Ce].includes(Cf)) ? "Unique" : "Similar";
    S2 = ([Ad, Ae, Af, Bd, Be, Bf, Cd, Ce, Cf]).includes("Unique") ? "SWin" : "SLos";

    // S3
    // [Aa Ab Ac]
    // [Ba Bb Bc]
    // [Ca CA Cc]

    Ag = (![Ah, Ai, Bg, Bh, Bi, Cg, Ch, Ci].includes(Ag)) ? "Unique" : "Similar";
    Ah = (![Ag, Ai, Bg, Bh, Bi, Cg, Ch, Ci].includes(Ah)) ? "Unique" : "Similar";
    Ai = (![Ag, Ah, Bg, Bh, Bi, Cg, Ch, Ci].includes(Ai)) ? "Unique" : "Similar";
    Bg = (![Ag, Ah, Ai, Bh, Bi, Cg, Ch, Ci].includes(Bg)) ? "Unique" : "Similar";
    Bh = (![Ag, Ah, Ai, Bg, Bi, Cg, Ch, Ci].includes(Bh)) ? "Unique" : "Similar";
    Bi = (![Ag, Ah, Ai, Bg, Bh, Cg, Ch, Ci].includes(Bi)) ? "Unique" : "Similar";
    Cg = (![Ag, Ah, Ai, Bg, Bh, Bi, Ch, Ci].includes(Cg)) ? "Unique" : "Similar";
    Ch = (![Ag, Ah, Ai, Bg, Bh, Bi, Cg, Ci].includes(Ch)) ? "Unique" : "Similar";
    Ci = (![Ag, Ah, Ai, Bg, Bh, Bi, Cg, Ch].includes(Ci)) ? "Unique" : "Similar";
    S3 = ([Ag, Ah, Ai, Bg, Bh, Bi, Cg, Ch, Ci]).includes("Unique") ? "SWin" : "SLos";

    // S4
    // [Aa Ab Ac]
    // [Ba Bb Bc]
    // [Ca CA Cc]

    Da = (![Db, Dc, Ea, Eb, Ec, Fa, Fb, Fc].includes(Da)) ? "Unique" : "Similar";
    Db = (![Da, Dc, Ea, Eb, Ec, Fa, Fb, Fc].includes(Db)) ? "Unique" : "Similar";
    Dc = (![Da, Db, Ea, Eb, Ec, Fa, Fb, Fc].includes(Dc)) ? "Unique" : "Similar";
    Ea = (![Da, Db, Dc, Eb, Ec, Fa, Fb, Fc].includes(Ea)) ? "Unique" : "Similar";
    Eb = (![Da, Db, Dc, Ea, Ec, Fa, Fb, Fc].includes(Eb)) ? "Unique" : "Similar";
    Ec = (![Da, Db, Dc, Ea, Eb, Fa, Fb, Fc].includes(Ec)) ? "Unique" : "Similar";
    Fa = (![Da, Db, Dc, Ea, Eb, Ec, Fb, Fc].includes(Fa)) ? "Unique" : "Similar";
    Fb = (![Da, Db, Dc, Ea, Eb, Ec, Fa, Fc].includes(Fb)) ? "Unique" : "Similar";
    Fc = (![Da, Db, Dc, Ea, Eb, Ec, Fa, Fb].includes(Fc)) ? "Unique" : "Similar";
    S4 = ([Da, Db, Dc, Ea, Eb, Ec, Fa, Fb, Fc]).includes("Unique") ? "SWin" : "SLos";

    // S5
    // [Ad Ae Af]
    // [Bd Be Bf]
    // [Cd Ce Cf]

    Dd = (![De, Df, Ed, Ee, Ef, Fd, Fe, Ff].includes(Dd)) ? "Unique" : "Similar";
    De = (![Dd, Df, Ed, Ee, Ef, Fd, Fe, Ff].includes(De)) ? "Unique" : "Similar";
    Df = (![Dd, De, Ed, Ee, Ef, Fd, Fe, Ff].includes(Df)) ? "Unique" : "Similar";
    Ed = (![Dd, De, Df, Ee, Ef, Fd, Fe, Ff].includes(Ed)) ? "Unique" : "Similar";
    Ee = (![Dd, De, Df, Ed, Ef, Fd, Fe, Ff].includes(Ee)) ? "Unique" : "Similar";
    Ef = (![Dd, De, Df, Ed, Ee, Fd, Fe, Ff].includes(Ef)) ? "Unique" : "Similar";
    Fd = (![Dd, De, Df, Ed, Ee, Ef, Fe, Ff].includes(Fd)) ? "Unique" : "Similar";
    Fe = (![Dd, De, Df, Ed, Ee, Ef, Fd, Ff].includes(Fe)) ? "Unique" : "Similar";
    Ff = (![Dd, De, Df, Ed, Ee, Ef, Fd, Fe].includes(Ff)) ? "Unique" : "Similar";
    S5 = ([Dd, De, Df, Ed, Ee, Ef, Fd, Fe, Ff]).includes("Unique") ? "SWin" : "SLos";

    // S6
    // [Ga Gb Gc]
    // [Ba Bb Hc]
    // [Ia Ib Ic]

    Dg = (![Dh, Di, Eg, Eh, Ei, Fg, Fh, Fi].includes(Dg)) ? "Unique" : "Similar";
    Dh = (![Dg, Di, Eg, Eh, Ei, Fg, Fh, Fi].includes(Dh)) ? "Unique" : "Similar";
    Di = (![Dg, Dh, Eg, Eh, Ei, Fg, Fh, Fi].includes(Di)) ? "Unique" : "Similar";
    Eg = (![Dg, Dh, Di, Eh, Ei, Fg, Fh, Fi].includes(Eg)) ? "Unique" : "Similar";
    Eh = (![Dg, Dh, Di, Eg, Ei, Fg, Fh, Fi].includes(Eh)) ? "Unique" : "Similar";
    Ei = (![Dg, Dh, Di, Eg, Eh, Fg, Fh, Fi].includes(Ei)) ? "Unique" : "Similar";
    Fg = (![Dg, Dh, Di, Eg, Eh, Ei, Fh, Fi].includes(Fg)) ? "Unique" : "Similar";
    Fh = (![Dg, Dh, Di, Eg, Eh, Ei, Fg, Fi].includes(Fh)) ? "Unique" : "Similar";
    Fi = (![Dg, Dh, Di, Eg, Eh, Ei, Fg, Fh].includes(Fi)) ? "Unique" : "Similar";
    S6 = ([Dg, Dh, Di, Eg, Eh, Ei, Fg, Fh, Fi]).includes("Unique") ? "SWin" : "SLos";


    // S7
    // [Ga Gb Gc]
    // [Ha Hb Hc]
    // [Ia Ib Ic]

    Ga = (![Gb, Gc, Ha, Hb, Hc, Ia, Ib, Ic].includes(Ga)) ? "Unique" : "Similar";
    Gb = (![Ga, Gc, Ha, Hb, Hc, Ia, Ib, Ic].includes(Gb)) ? "Unique" : "Similar";
    Gc = (![Ga, Gb, Ha, Hb, Hc, Ia, Ib, Ic].includes(Gc)) ? "Unique" : "Similar";
    Ha = (![Ga, Gb, Gc, Hb, Hc, Ia, Ib, Ic].includes(Ha)) ? "Unique" : "Similar";
    Hb = (![Ga, Gb, Gc, Ha, Hc, Ia, Ib, Ic].includes(Hb)) ? "Unique" : "Similar";
    Hc = (![Ga, Gb, Gc, Ha, Hb, Ia, Ib, Ic].includes(Hc)) ? "Unique" : "Similar";
    Ia = (![Ga, Gb, Gc, Ha, Hb, Hc, Ib, Ic].includes(Ia)) ? "Unique" : "Similar";
    Ib = (![Ga, Gb, Gc, Ha, Hb, Hc, Ia, Ic].includes(Ib)) ? "Unique" : "Similar";
    Ic = (![Ga, Gb, Gc, Ha, Hb, Hc, Ia, Ib].includes(Ic)) ? "Unique" : "Similar";
    S7 = ([Ga, Gb, Gc, Ha, Hb, Hc, Ia, Ib, Ic]).includes("Unique") ? "SWin" : "SLos";

    // S8
    // [Gd Ge Gf]
    // [Hd He Hf]
    // [Id Ie If]

    Gd = (![Ge, Gf, Hd, He, Hf, Id, Ie, If].includes(Gd)) ? "Unique" : "Similar";
    Ge = (![Gd, Gf, Hd, He, Hf, Id, Ie, If].includes(Ge)) ? "Unique" : "Similar";
    Gf = (![Gd, Ge, Hd, He, Hf, Id, Ie, If].includes(Gf)) ? "Unique" : "Similar";
    Hd = (![Gd, Ge, Gf, He, Hf, Id, Ie, If].includes(Hd)) ? "Unique" : "Similar";
    He = (![Gd, Ge, Gf, Hd, Hf, Id, Ie, If].includes(He)) ? "Unique" : "Similar";
    Hf = (![Gd, Ge, Gf, Hd, He, Id, Ie, If].includes(Hf)) ? "Unique" : "Similar";
    Id = (![Gd, Ge, Gf, Hd, He, Hf, Ie, If].includes(Id)) ? "Unique" : "Similar";
    Ie = (![Gd, Ge, Gf, Hd, He, Hf, Id, If].includes(Ie)) ? "Unique" : "Similar";
    If = (![Gd, Ge, Gf, Hd, He, Hf, Id, Ie].includes(If)) ? "Unique" : "Similar";
    S8 = ([Gd, Ge, Gf, Hd, He, Hf, Id, Ie, If]).includes("Unique") ? "SWin" : "SLos";

    // S9
    // [Gg Gh Gi]
    // [Hg Hh Hi]
    // [Ig Ih Ii]

    Gg = (![Gh, Gi, Hg, Hh, Hi, Ig, Ih, Ii].includes(Gg)) ? "Unique" : "Similar";
    Gh = (![Gg, Gi, Hg, Hh, Hi, Ig, Ih, Ii].includes(Gh)) ? "Unique" : "Similar";
    Gi = (![Gg, Gh, Hg, Hh, Hi, Ig, Ih, Ii].includes(Gi)) ? "Unique" : "Similar";
    Hg = (![Gg, Gh, Gi, Hh, Hi, Ig, Ih, Ii].includes(Hg)) ? "Unique" : "Similar";
    Hh = (![Gg, Gh, Gi, Hg, Hi, Ig, Ih, Ii].includes(Hh)) ? "Unique" : "Similar";
    Hi = (![Gg, Gh, Gi, Hg, Hh, Ig, Ih, Ii].includes(Hi)) ? "Unique" : "Similar";
    Ig = (![Gg, Gh, Gi, Hg, Hh, Hi, Ih, Ii].includes(Ig)) ? "Unique" : "Similar";
    Ih = (![Gg, Gh, Gi, Hg, Hh, Hi, Ig, Ii].includes(Ih)) ? "Unique" : "Similar";
    Ii = (![Gg, Gh, Gi, Hg, Hh, Hi, Ig, Ih].includes(Ii)) ? "Unique" : "Similar";
    S9 = ([Gg, Gh, Gi, Hg, Hh, Hi, Ig, Ih, Ii]).includes("Unique") ? "SWin" : "SLos";


    var Winner = 0;
    if(S1 == S2 == S3 == S4 == S5 == S6 == S7 == S8 == S9 == 'SWin'){
        SWinner = 1;
        console.log("Square Test Passed");
    }
}


if( VWinner == HWinner == SWinner == 1){
    console.log("Sudukoo Solved");
}