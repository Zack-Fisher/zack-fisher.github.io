var filenames = ['a;kslfnv;kdlxnvmc.png', 'adovndjnvsndfv.png', 'adshvjnxkhnbcv,klx,nvmc.png', 'busbusbus.png', 'cgfnghjmnhjmn.png', 'dasfgrdfgjubjk.png', 'dfbgfgbhgfn.png', 'dfdxgfchgh.png', 'dfhcfgnhgvfjghjhj.png', 'dfhgfvjnhbvjm.png', 'dfsdgvfsbdfb.png', 'dghdfxhfcgth.png', 'dsgcfghgcj.png', 'dxfrjcgjnghjvbgmbghnjm.png', 'egfhxdjcfhyjhgjm.png', 'eibdsuvvkjldxvmf.png', 'gdfvhmgfgfh.png', 'gex.png', 'hfbgfnhjghnjhhgmj.png', 'hjukhgjkhbhjkojkn.png', 'hydtfjgyukhbk.png', 'jenefvlnvjkflvn.png', 'jsdfkjlskfvjfsnv.png', 'kadjcnksjdnlcjsndc.png', 'kifjlsifhfldkznfv.png', 'ksjdfnjsfnkmvc.png', 'ksjdfnvjkdfsnlfg.png', 'losat.png', 'oifootblal.png', 'pchoooes.png', 'qwarsdfghh.png', 'regtffhfghjgh.png', 'rp.png', 'sadfsxbgfhbvnh.png', 'sdbgdfhbgcfngvnj.png', 'sdfgcghgfhhjn.png', 'sdgvfdbgvbn.png', 'sdhfdhgfnjhgjmhnm.png', 'sdzgvdxfbhgcfngvn.png', 'segfrdrxhfrgthgtfh.png', 'sfbgcgvngnjgn.png', 'sfgsdfxgbxgchj.png', 'sgdfhgfhghjnghjm.png', 'sjdnvilksdnldskjnfv.png', 'sona.png', 'Sprite-0003.png', 'srbghfvnhghn.png', 'srxdgfnhnm.png', 'sxgddhfh.png', 'szdfxbvdxbfdfbv.png', 'szfhxcvnhgcfngvn.png', 'vdvdxvbdxbdxbgf.png', 'wegrsehdxth.png', 'xdghfcngvcvvgncvgngbvn.png', 'xdryjhcgthnyjjny.png', 'xhcgfvnbgvnhj.png', 'zsdbgfvmkbhjkln;jm.png', 'zsdgfdxbhvfnh.png'];

var divider = document.getElementById("art");

for (let source in filenames){
    var image = document.createElement("img");
    image.src = "image/" + filenames[source];
    image.alt = filenames[source];
    image.style.position = "relative";
    image.style.left = "-20px";
    image.style.top = "-5px";
    image.style.borderRadius = "50px";
    image.role = "button";

    divider.append(image);
    divider.append(document.createElement("br"));
}