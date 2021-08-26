const animacion = 
[
    () => { map.panTo(paso[0]) }, // Initial Zoom = 6
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.panTo(paso[1]) },
    () => { map.panTo(paso[2]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.setZoom(map.getZoom()+1) }, // 10
    () => { map.panTo(paso[3]) },
    () => { popupCal = L.popup().setLatLng(paso[3]).setContent(contentCal).openOn(map); },
    () => { map.setZoom(map.getZoom()+1); },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.setZoom(map.getZoom()+1); }, // 14
    () => 
    { 
        document.getElementById("label-clasAA").classList.add("active"); 
        document.getElementById("label-arquitectonicas").classList.add("active");

        seleccionClasi = "AA" ; 
        seleccionTipo = "Almacenes de Pinturas Arquitectonicas";
        showStations() // Almacenes de Pinturas Arquitectonicas - AA
    },
    () => 
    {
        document.getElementById("label-arquitectonicas").classList.remove("active");
        document.getElementById("label-f-general").classList.add("active");

        seleccionTipo = "Ferreterías en general";
        showStations() // Ferreterías en general - AA
    },
    () => 
    { 
        document.getElementById("label-clasAA").classList.remove("active"); 
        document.getElementById("label-clasA").classList.add("active"); 
        seleccionClasi = "A" ; 
        showStations()  // Ferreterías en general - A
    },
    () => 
    { 
        document.getElementById("label-f-general").classList.remove("active");
        document.getElementById("label-arquitectonicas").classList.add("active");

        seleccionTipo = "Almacenes de Pinturas Arquitectonicas";
        showStations() // Almacenes de Pinturas Arquitectonicas - A
    },
    () => 
    { 
        document.getElementById("label-clasA").classList.remove("active");
        document.getElementById("label-clasB").classList.add("active"); 
        seleccionClasi = "B" ; 
        showStations()  // Almacenes de Pinturas Arquitectonicas - B
    },
    () => 
    { 
        document.getElementById("label-arquitectonicas").classList.remove("active");
        document.getElementById("label-depositos").classList.add("active");
        seleccionTipo = "Depósitos de materiales";
        showStations()  // Depósitos de materiales - B
    },
    () => 
    { 
        document.getElementById("label-depositos").classList.remove("active");
        document.getElementById("label-f-general").classList.add("active");
    
        seleccionTipo = "Ferreterías en general";
        showStations()  // Ferreterías en general - B
    },
    () => 
    { 
        document.getElementById("label-clasB").classList.remove("active");
        document.getElementById("label-clasC").classList.add("active");
    
        seleccionClasi = "C" ;
        showStations()  // Ferreterías en general - C
    },
    () => 
    { 
        document.getElementById("label-clasC").classList.remove("active");
        document.getElementById("label-f-general").classList.remove("active");
        
        seleccionClasi = "" ;
        seleccionTipo= "" ;
        showStations();  //Todos
    },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1); popupCal.remove(); }, // 9
    () => 
    { 
        document.getElementById("label-clasAA").classList.add("active"); 
        document.getElementById("label-arquitectonicas").classList.add("active");

        seleccionClasi = "AA" ; 
        seleccionTipo = "Almacenes de Pinturas Arquitectonicas";
        showStations() // Almacenes de Pinturas Arquitectonicas - AA
    },
    () => 
    {
        document.getElementById("label-arquitectonicas").classList.remove("active");
        document.getElementById("label-f-general").classList.add("active");

        seleccionTipo = "Ferreterías en general";
        showStations() // Ferreterías en general - AA
    },
    () => 
    { 
        document.getElementById("label-clasAA").classList.remove("active"); 
        document.getElementById("label-clasA").classList.add("active"); 
        seleccionClasi = "A" ; 
        showStations()  // Ferreterías en general - A
    },
    () => 
    { 
        document.getElementById("label-f-general").classList.remove("active");
        document.getElementById("label-arquitectonicas").classList.add("active");

        seleccionTipo = "Almacenes de Pinturas Arquitectonicas";
        showStations() // Almacenes de Pinturas Arquitectonicas - A
    },
    () => 
    { 
        document.getElementById("label-clasA").classList.remove("active");
        document.getElementById("label-clasB").classList.add("active"); 
        seleccionClasi = "B" ; 
        showStations()  // Almacenes de Pinturas Arquitectonicas - B
    },
    () => 
    { 
        document.getElementById("label-arquitectonicas").classList.remove("active");
        document.getElementById("label-depositos").classList.add("active");
        seleccionTipo = "Depósitos de materiales";
        showStations()  // Depósitos de materiales - B
    },
    () => 
    { 
        document.getElementById("label-depositos").classList.remove("active");
        document.getElementById("label-f-general").classList.add("active");
    
        seleccionTipo = "Ferreterías en general";
        showStations()  // Ferreterías en general - B
    },
    () => 
    { 
        document.getElementById("label-clasB").classList.remove("active");
        document.getElementById("label-clasC").classList.add("active");
    
        seleccionClasi = "C" ;
        showStations()  // Ferreterías en general - C
    },
    () => 
    { 
        document.getElementById("label-f-general").classList.remove("active");
        document.getElementById("label-depositos").classList.add("active");
    
        seleccionTipo= "Depósitos de materiales";
        showStations()  // Depósitos de materiales - C
    },
    () => 
    { 
        document.getElementById("label-clasC").classList.remove("active");
        document.getElementById("label-depositos").classList.remove("active");
        
        seleccionClasi = "" ;
        seleccionTipo= "" ;
        showStations()  // Todos
    },
    () => { map.panTo(paso[4]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.setZoom(map.getZoom()+1) }, // 11
    () => { map.panTo(paso[5]) },
    () => { map.panTo(paso[6]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.setZoom(map.getZoom()+1) }, // 13
    () => { map.panTo(paso[7]);  },
    () => { map.setZoom(map.getZoom()+1) }, // 14
    () => { map.panTo(paso[8]) },
    () => { map.panTo(paso[9]) },
    () => { popupPal = L.popup().setLatLng(paso[9]).setContent(contentPal).openOn(map); },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.setZoom(map.getZoom()+1) }, // 16
    () => 
    {
        document.getElementById("label-f-general").classList.add("active");
        document.getElementById("label-clasAA").classList.add("active"); 
        seleccionClasi = "AA" ;
        seleccionTipo = "Ferreterías en general";
        showStations() // Ferreterías en general - AA
    },
    () => 
    {
        document.getElementById("label-clasAA").classList.remove("active"); 
        document.getElementById("label-clasA").classList.add("active"); 
        seleccionClasi = "A" ;
        showStations() // Ferreterías en general - A
    },
    () => 
    { 
        document.getElementById("label-clasA").classList.remove("active");
        document.getElementById("label-f-general").classList.remove("active");
        
        seleccionClasi = "" ;
        seleccionTipo= "" ;
        showStations() // Todos
    },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1); popupPal.remove()  }, // 11
    () => 
    {
        document.getElementById("label-f-general").classList.add("active");
        document.getElementById("label-clasAA").classList.add("active"); 
        seleccionClasi = "AA" ;
        seleccionTipo = "Ferreterías en general";
        showStations() // Ferreterías en general - AA
    },
    () => 
    {
        document.getElementById("label-clasAA").classList.remove("active"); 
        document.getElementById("label-clasA").classList.add("active"); 
        seleccionClasi = "A" ;
        showStations() //  Ferreterías en general - A
    },
    () => 
    { 
        document.getElementById("label-clasA").classList.remove("active");
        document.getElementById("label-f-general").classList.remove("active");
        
        seleccionClasi = "" ;
        seleccionTipo= "" ;
        showStations() // Todos
    },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) }, // 8
    () => { map.panTo(paso[10]) },
    () => { map.panTo(paso[11]) },
    () => { map.panTo(paso[12]) },
    () => { map.panTo(paso[13]) },
    () => { map.panTo(paso[14]) },
    () => { map.panTo(paso[15]) },
    () => { map.panTo(paso[16]) },
    () => { map.panTo(paso[17]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.panTo(paso[18]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.panTo(paso[19]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.panTo(paso[20]) },
    () => { map.setZoom(map.getZoom()+1) }, // 13
    () => { map.panTo(paso[21]) },
    () => { popupBlla = L.popup().setLatLng(paso[21]).setContent(contentBlla).openOn(map); },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.setZoom(map.getZoom()+1) }, 
    () => { map.setZoom(map.getZoom()+1) }, // 16
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) }, // 12
    () => 
    { 
        document.getElementById("label-clasAA").classList.add("active"); 
        document.getElementById("label-arquitectonicas").classList.add("active");

        seleccionClasi = "AA" ; 
        seleccionTipo = "Almacenes de Pinturas Arquitectonicas";
        showStations() // Almacenes de Pinturas Arquitectonicas - AA
    },
    () => 
    { 
        document.getElementById("label-arquitectonicas").classList.remove("active");
        document.getElementById("label-depositos").classList.add("active");
        seleccionTipo = "Depósitos de materiales";
        showStations()  // Depósitos de materiales - AA
    },
    () => 
    { 
        document.getElementById("label-depositos").classList.remove("active");
        document.getElementById("label-f-general").classList.add("active");
    
        seleccionTipo = "Ferreterías en general";
        showStations()  // Ferreterías en general - AA
    },
    () => 
    { 
        document.getElementById("label-f-general").classList.remove("active");
        document.getElementById("label-otros").classList.add("active");
    
        seleccionTipo = "Otros";
        showStations()  // Otros - AA
    },
    () => 
    { 
        document.getElementById("label-clasAA").classList.remove("active");
        document.getElementById("label-otros").classList.remove("active");
        document.getElementById("label-clasA").classList.add("active");
        document.getElementById("label-arquitectonicas").classList.add("active");
        
        seleccionTipo = "Almacenes de Pinturas Arquitectonicas";
        seleccionClasi  = "A";
        showStations()  // Almacenes de Pinturas Arquitectonicas - A
    },
    () => 
    { 
        document.getElementById("label-arquitectonicas").classList.remove("active");
        document.getElementById("label-depositos").classList.add("active");
        
        seleccionTipo = "Depósitos de materiales";
        showStations()  // Depósitos de materiales - A
    },
    () => 
    { 
        document.getElementById("label-depositos").classList.remove("active");
        document.getElementById("label-f-general").classList.add("active");
    
        seleccionTipo = "Ferreterías en general";
        showStations() // Ferreterías en general - A
    },
    () => 
    { 
        document.getElementById("label-f-general").classList.remove("active");
        document.getElementById("label-clasA").classList.remove("active");
        document.getElementById("label-clasB").classList.add("active");
        document.getElementById("label-electricos").classList.add("active");

    
        seleccionTipo = "Almacen de Eléctricos";
        showStations() // Almacen de Eléctricos - B
    },
    () => 
    { 
        document.getElementById("label-electricos").classList.remove("active");
        document.getElementById("label-arquitectonicas").classList.add("active");
    
        seleccionTipo = "Almacenes de Pinturas Arquitectonicas";
        showStations() // Almacenes de Pinturas Arquitectonicas - B
    },
    () => 
    { 
        document.getElementById("label-arquitectonicas").classList.remove("active");
        document.getElementById("label-depositos").classList.add("active");
        
        seleccionTipo = "Depósitos de materiales";
        showStations() // Depósitos de materiales - B
    },
    () => 
    { 
        document.getElementById("label-depositos").classList.remove("active");
        document.getElementById("label-f-general").classList.add("active");
    
        seleccionTipo = "Ferreterías en general";
        showStations() // Ferreterías en general - B
    },
    () => 
    { 
        document.getElementById("label-f-general").classList.remove("active");
        document.getElementById("label-otros").classList.add("active");
    
        seleccionTipo = "Otros";
        showStations() // Otros - B
    },
    () => 
    { 
        document.getElementById("label-otros").classList.remove("active");
        document.getElementById("label-clasB").classList.remove("active");

        document.getElementById("label-clasC").classList.add("active");
        document.getElementById("label-arquitectonicas").classList.add("active");
    
        seleccionTipo = "Almacenes de Pinturas Arquitectonicas";
        seleccionClasi  = "C";
        showStations() // Almacenes de Pinturas Arquitectonicas - C
    },
    () => 
    { 
        document.getElementById("label-arquitectonicas").classList.remove("active");
        document.getElementById("label-depositos").classList.add("active");
        
        seleccionTipo = "Depósitos de materiales";
        showStations() // Depósitos de materiales - C
    },
    () => 
    { 
        document.getElementById("label-depositos").classList.remove("active");
        document.getElementById("label-f-general").classList.add("active");
    
        seleccionTipo = "Ferreterías en general";
        showStations() // Ferreterías en general - C
    },
    () => 
    { 
        document.getElementById("label-f-general").classList.remove("active");
        document.getElementById("label-otros").classList.add("active");
    
        seleccionTipo = "Otros";
        showStations() // Otros - C
    },
    () => 
    { 
        document.getElementById("label-otros").classList.remove("active");
        document.getElementById("label-clasC").classList.remove("active");
    
        seleccionTipo = "";
        seleccionClasi  = "";
        showStations() // Todos
    },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1); popupBlla.remove()  }, // 7
    () => { map.panTo(paso[22]) },
    () => { map.panTo(paso[23]) },
    () => { map.panTo(paso[24]) },
    () => { map.setZoom(map.getZoom()+1) }, // 8
    () => { map.panTo(paso[25]) },
    () => { map.setZoom(map.getZoom()+1) }, // 9
    () => { map.panTo(paso[26]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.setZoom(map.getZoom()+1) }, // 11
    () => { map.panTo(paso[27]) },
    () => { map.setZoom(map.getZoom()+1) }, // 12
    () => { map.panTo(paso[28]) },
    () => 
    { 

        document.getElementById("label-clasAA").classList.add("active");
        document.getElementById("label-electricos").classList.add("active");

        seleccionTipo = "Almacen de Eléctricos";
        seleccionClasi  = "AA";
        showStations() // Almacen de Eléctricos - AA
    },
    () => 
    { 
        document.getElementById("label-electricos").classList.remove("active");
        document.getElementById("label-arquitectonicas").classList.add("active");

        seleccionTipo = "Almacenes de Pinturas Arquitectonicas";

        showStations() // Almacenes de Pinturas Arquitectonicas - AA
    },
    () => 
    { 
        document.getElementById("label-arquitectonicas").classList.remove("active");
        document.getElementById("label-depositos").classList.add("active");
        
        seleccionTipo = "Depósitos de materiales";
        showStations() // Depósitos de materiales - AA
    },
    () => 
    { 
        document.getElementById("label-depositos").classList.remove("active");
        document.getElementById("label-f-general").classList.add("active");
    
        seleccionTipo = "Ferreterías en general";
        showStations() // Ferreterías en general - AA
    },
    () => 
    { 
        document.getElementById("label-f-general").classList.remove("active");
        document.getElementById("label-otros").classList.add("active");
    
        seleccionTipo = "Otros";
        showStations() // Otros - AA
    },
    () => 
    { 
        document.getElementById("label-clasAA").classList.remove("active");
        document.getElementById("label-otros").classList.remove("active");
        document.getElementById("label-clasA").classList.add("active");
        document.getElementById("label-electricos").classList.add("active");
        
        seleccionTipo = "Almacen de Eléctricos";
        seleccionClasi  = "A";
        showStations()  // Almacen de Eléctricos - A
    },
    () => 
    { 
        document.getElementById("label-electricos").classList.remove("active");
        document.getElementById("label-arquitectonicas").classList.add("active");

        seleccionTipo = "Almacenes de Pinturas Arquitectonicas";

        showStations() // Almacenes de Pinturas Arquitectonicas - A
    },
    () => 
    { 
        document.getElementById("label-arquitectonicas").classList.remove("active");
        document.getElementById("label-depositos").classList.add("active");
        
        seleccionTipo = "Depósitos de materiales";
        showStations() // Depósitos de materiales - A
    },
    () => 
    { 
        document.getElementById("label-depositos").classList.remove("active");
        document.getElementById("label-f-general").classList.add("active");
    
        seleccionTipo = "Ferreterías en general";
        showStations() // Ferreterías en general - A
    },
    () => 
    { 
        document.getElementById("label-f-general").classList.remove("active");
        document.getElementById("label-otros").classList.add("active");
    
        seleccionTipo = "Otros";
        showStations() // Otros - A
    },
    () => 
    { 
        document.getElementById("label-clasA").classList.remove("active");
        document.getElementById("label-otros").classList.remove("active");
        document.getElementById("label-clasB").classList.add("active");
        document.getElementById("label-electricos").classList.add("active");
        
        seleccionTipo = "Almacen de Eléctricos";
        seleccionClasi  = "B";
        showStations()  // Almacen de Eléctricos - B
    },
    () => 
    { 
        document.getElementById("label-electricos").classList.remove("active");
        document.getElementById("label-arquitectonicas").classList.add("active");

        seleccionTipo = "Almacenes de Pinturas Arquitectonicas";

        showStations() // Almacenes de Pinturas Arquitectonicas - B
    },
    () => 
    { 
        document.getElementById("label-arquitectonicas").classList.remove("active");
        document.getElementById("label-depositos").classList.add("active");
        
        seleccionTipo = "Depósitos de materiales";
        showStations() // Depósitos de materiales - B
    },
    () => 
    { 
        document.getElementById("label-depositos").classList.remove("active");
        document.getElementById("label-f-general").classList.add("active");
    
        seleccionTipo = "Ferreterías en general";
        showStations() // Ferreterías en general - B
    },
    () => 
    { 
        document.getElementById("label-f-general").classList.remove("active");
        document.getElementById("label-otros").classList.add("active");
    
        seleccionTipo = "Otros";
        showStations() // Otros - B
    },
    () => 
    { 
        document.getElementById("label-clasB").classList.remove("active");
        document.getElementById("label-otros").classList.remove("active");
        document.getElementById("label-clasC").classList.add("active");
        document.getElementById("label-depositos").classList.add("active");
        
        seleccionTipo = "Depósitos de materiales";
        seleccionClasi  = "C";
        showStations()  // Almacen de Eléctricos - B
    },
    () => 
    { 
        document.getElementById("label-depositos").classList.remove("active");
        document.getElementById("label-f-general").classList.add("active");
    
        seleccionTipo = "Ferreterías en general";
        showStations() // Ferreterías en general - A
    },
    () => 
    { 
        document.getElementById("label-clasC").classList.remove("active");
        document.getElementById("label-f-general").classList.remove("active");

        
        seleccionTipo = "";
        seleccionClasi  = "";
        showStations()  // Almacen de Eléctricos - B
    },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.panTo(paso[29]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { popupMed = L.popup().setLatLng(paso[29]).setContent(contentMed).openOn(map); },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1); popupMed.remove() },
    () => { map.panTo(paso[30]) },
    () => { map.panTo(paso[31]) },
    () => { map.panTo(paso[32]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.panTo(paso[33]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.panTo(paso[34]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.panTo(paso[35]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.panTo(paso[36]) },
    () => { map.panTo(paso[37]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.panTo(paso[38]) },
    () => { map.panTo(paso[39]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.panTo(paso[40]) },
    () => { popupMan = L.popup().setLatLng(paso[40]).setContent(contentMan).openOn(map); },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1); popupMan.remove() },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.panTo(paso[41]) },
    () => { map.panTo(paso[42]) },
    () => { map.panTo(paso[43]) },
    () => { map.panTo(paso[44]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.panTo(paso[45]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.panTo(paso[46]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.panTo(paso[47]) },
    () => { popupPer = L.popup().setLatLng(paso[47]).setContent(contentPer).openOn(map); },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.panTo(paso[48]) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1); popupPer.remove() },
    () => { map.panTo(paso[49]) },
    () => { map.panTo(paso[50]) },
    () => { map.panTo(paso[51]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.panTo(paso[52]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.panTo(paso[53]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.panTo(paso[54]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.panTo(paso[55]) },
    () => { popupArm = L.popup().setLatLng(paso[55]).setContent(contentArm).openOn(map); },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1); popupArm.remove() },
    () => { map.panTo(paso[56]) },
    () => { map.panTo(paso[57]) },
    () => { map.panTo(paso[58]) },
    () => { map.panTo(paso[59]) },
    () => { map.panTo(paso[60]) },
    () => { map.panTo(paso[61]) },
    () => { map.panTo(paso[62]) },
    () => { map.panTo(paso[63]) },
    () => { map.panTo(paso[64]) },
    () => { map.panTo(paso[65]) },
    () => { popupBta = L.popup().setLatLng(paso[65]).setContent(contentBta).openOn(map); },
    () => { map.panTo(paso[66]) },
    () => { map.panTo(paso[67]) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.setZoom(map.getZoom()+1) },
    () => { map.panTo(paso[68]) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1) },
    () => { map.setZoom(map.getZoom()-1); popupBta.remove() },
    () => { document.getElementById('clasificacion').options[1].selected = true; showStations() },
    () => { document.getElementById('clasificacion').options[2].selected = true; showStations() },
    () => { document.getElementById('clasificacion').options[3].selected = true; showStations() },
    () => { document.getElementById('clasificacion').options[0].selected = true; showStations() },
    () => { document.getElementById('tipologia').options[1].selected = true; showStations() },
    () => { document.getElementById('tipologia').options[2].selected = true; showStations() },
    () => { document.getElementById('tipologia').options[3].selected = true; showStations() },
    () => { document.getElementById('tipologia').options[4].selected = true; showStations() },
    () => { document.getElementById('tipologia').options[5].selected = true; showStations() },
    () => { document.getElementById('tipologia').options[6].selected = true; showStations() },
    () => { document.getElementById('tipologia').options[0].selected = true; showStations() },
    () => { map.addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/'+mapStyles[Math.floor(Math.random() * 5)])) },
    () => { window.scrollTo({ top: 800, behavior: 'smooth' }); },
    () => { window.scrollTo({ top: 0, behavior: 'smooth' }) ; getData() },
]