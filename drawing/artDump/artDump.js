var filenames = ['a;kslfnv;kdlxnvmc.png', 'adovndjnvsndfv.png', 'adshvjnxkhnbcv,klx,nvmc.png', 'busbusbus.png', 'cgfnghjmnhjmn.png', 'dasfgrdfgjubjk.png', 'dfbgfgbhgfn.png', 'dfdxgfchgh.png', 'dfhcfgnhgvfjghjhj.png', 'dfhgfvjnhbvjm.png', 'dfsdgvfsbdfb.png', 'dghdfxhfcgth.png', 'dsgcfghgcj.png', 'dxfrjcgjnghjvbgmbghnjm.png', 'egfhxdjcfhyjhgjm.png', 'eibdsuvvkjldxvmf.png', 'gdfvhmgfgfh.png', 'gex.png', 'hfbgfnhjghnjhhgmj.png', 'hjukhgjkhbhjkojkn.png', 'hydtfjgyukhbk.png', 'jenefvlnvjkflvn.png', 'jsdfkjlskfvjfsnv.png', 'kadjcnksjdnlcjsndc.png', 'kifjlsifhfldkznfv.png', 'ksjdfnjsfnkmvc.png', 'ksjdfnvjkdfsnlfg.png', 'losat.png', 'oifootblal.png', 'pchoooes.png', 'qwarsdfghh.png', 'regtffhfghjgh.png', 'rp.png', 'sadfsxbgfhbvnh.png', 'sdbgdfhbgcfngvnj.png', 'sdfgcghgfhhjn.png', 'sdgvfdbgvbn.png', 'sdhfdhgfnjhgjmhnm.png', 'sdzgvdxfbhgcfngvn.png', 'segfrdrxhfrgthgtfh.png', 'sfbgcgvngnjgn.png', 'sfgsdfxgbxgchj.png', 'sgdfhgfhghjnghjm.png', 'sjdnvilksdnldskjnfv.png', 'sona.png', 'Sprite-0003.png', 'srbghfvnhghn.png', 'srxdgfnhnm.png', 'sxgddhfh.png', 'szdfxbvdxbfdfbv.png', 'szfhxcvnhgcfngvn.png', 'vdvdxvbdxbdxbgf.png', 'wegrsehdxth.png', 'xdghfcngvcvvgncvgngbvn.png', 'xdryjhcgthnyjjny.png', 'xhcgfvnbgvnhj.png', 'zsdbgfvmkbhjkln;jm.png', 'zsdgfdxbhvfnh.png'];

var divider = document.getElementById("art");

for (let source in filenames){
    var image = document.createElement("img");
    image.src = "image/" + filenames[source];
    image.alt = filenames[source];
    image.style.borderRadius = "50px";
    image.role = "button";
    image.onclick = "alert('test')"; //this setting doesn't do anything, why?

    divider.append(image);  //event listeners don't carry through appending??
    divider.append(document.createElement("br"));
}

for(let image of document.getElementsByTagName('img')){
    image.className = "0";  //lol jank
    image.addEventListener("click", () => {
        let i = parseInt(image.className);
        if(i % 2 == 0){
            image.style.width = "100%";
            image.style.height = "100%";
        }
        else{
            image.style.width = "auto";
            image.style.height = "auto";
        }
        i++;
        image.className = i.toString(); //this is weird but i have to store the index with the image somehow
    });
}