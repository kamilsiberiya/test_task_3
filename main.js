var Palette = ["#832D0F","#FECAB8","#E84108",
        "#054928","#64EEAC","#0FA55D",
      "#0D5F94","#6BB9EB",];

var Palette2 =["#059A6A","#64EDC0","#ACEDD7",
        "#0D5F94","#6BB9EB","#FEBD6B",
      "#E85408","#FE9C6B",];
Palette = Palette2;
//клетки которые открыты в данный момент
var OpenCell=undefined;
var OpenCells=[];
//эта функция генерирует цвета для квадатов и запускаяет таймер
var CollorCell=[];
var Cells = document.querySelectorAll('.Field__Cell');
var GameStart = false;
function Start() {
    //в этой перперменной будут храниться цвета,
    // упорядоченные по номерам ячеек
    var CellColl=[];
    ///номера цветов
    //тут также каждому цвету будет присваиваться номер
    for (var i = 0; i < 8; i++) {
      CellColl[i]=Palette[i];
      CellColl[i+8]=Palette[i];
    }
    //генерируются номера клеток
    for (var i = 0; i < 16; i++) {
      var b = Math.floor(Math.random()*CellColl.length);
      CollorCell[i]=CellColl[b]
      CellColl.splice(b,1);
    }
    GameStart = true;
    ///обнуление текущего положения
    OpenCell=undefined;
    for (var i = 0; i < 16; i++) {
        PaintingCell(i,"#ffffff");
        OpenCells[i]=false;
     }
}
//для просмотра цвета
function test() {
   for (var i = 0; i < 16; i++) {
     PaintingCell(i,CollorCell[i])

  }
}

function PaintingCell(Namber,Coll) {
  var Cells = document.querySelectorAll('.Field__Cell');
  Cells[Namber].style.backgroundColor = Coll;
}

//функция вызываемая при клике
  function ClicToCell(NumberCell) {
    if (GameStart) {
      if (OpenCells[NumberCell]!=true) {
          if ((OpenCell === undefined)) {
            OpenCell=NumberCell;
            PaintingCell(OpenCell,CollorCell[OpenCell]);
            return ;
          }else if (CollorCell[NumberCell] == CollorCell[OpenCell]) {
                    if (NumberCell==OpenCell) {
                    console.log(NumberCell);
                    PaintingCell(OpenCell,CollorCell[OpenCell]);
                    setTimeout(PaintingCell(NumberCell,"#ffffff"),1000);
                    OpenCell=undefined;
                    return ;
                  }else {
                  //  console.log("одинаковый цвет!!!");
                    PaintingCell(NumberCell,CollorCell[NumberCell]);
                    OpenCells[NumberCell]=true;
                    OpenCells[OpenCell]=true;
                    OpenCell=undefined;
                  }
          }else {
            PaintingCell(OpenCell,CollorCell[OpenCell]);
            PaintingCell(NumberCell,CollorCell[NumberCell]);
            setTimeout(PaintingCell,1000,NumberCell,"#ffffff");
            setTimeout(PaintingCell,1000,OpenCell,"#ffffff");
            OpenCell=undefined;
            return ;
          }
        }else {

          alert("этой клетке удже надена пара");
        }
      for (var i = 0; i < 16; i++) {
        OpenCells[i]
        if (OpenCells[i]==false) {
          return;
        }else if (i==15) {
          alert("вы победили");
              }
      }
    }
}
