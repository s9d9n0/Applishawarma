
function getTableHead(DataRef) {
    const column = Object.keys(DataRef[0]);
    // const column = Object.keys(Data[0]);
    const head = document.querySelector('thead');
    let tags = "<tr>";
        // for (i = 0; i<column.length; i++){
        //     if (i<6){
        //         tags += `<th rowspan=2 onclick="sortTable(${i})">${column[i]}</th>`;
        //     }
        //     if (/*i==6 ||*/ i==7){
        //         tags += `<th colspan=24 class="largeur">${column[i]}</th>`;
        //     }
        // }
        tags += `<th rowspan=2 onclick="sortTable(0)">date</th>`;
        tags += `<th rowspan=2 onclick="sortTable(1)">zone</th>`;
        tags += `<th rowspan=2 onclick="sortTable(2)">quart.</th>`;
        tags += `<th rowspan=2 onclick="sortTable(3)">type</th>`;
        tags += `<th rowspan=2 onclick="sortTable(4)">nom</th>`;
        tags += `<th rowspan=2 onclick="sortTable(5)">quota</th>`;
        tags += `<th colspan=24 onclick="sortTable(6)">conso / % utilisation</th>`;
    tags += "</tr><tr>";
        for (i = 0; i<column.length; i++){
            // if (i<5){
            //     tags += `<th></th>`;
            // }
            if (/*i==6 ||*/ i==7){
                tags += `<th class="heure">0<sup>h</sup></th><th>-</th><th>-</th>
                        <th>-</th><th>-</th><th>-</th>
                        <th class="heure">6<sup>h</sup></th><th>-</th><th>-</th>
                        <th>-</th><th>-</th><th>-</th>
                        <th class="heure">12<sup>h</sup></th><th>-</th><th>-</th>
                        <th>-</th><th>-</th><th>-</th>
                        <th class="heure">18<sup>h</sup></th><th>-</th><th>-</th>
                        <th>-</th><th>-</th><th>-</th>`;
            }
        }
    tags += "</tr>";        
    head.innerHTML = tags;
}

function getTableBody(DataRef){
    const body = document.querySelector('tbody');
    let tags = "";
    DataRef.map(d =>{
    // Data.map(d =>{
        tags += `<tr>
                    <td>${d.v1_date}</td>
                    <td>${d.v2_dc_zone}</td>
                    <td style="text-align:center;">${d.v3_quartier}</td>
                    <td>${d.v4_type}</td>
                    <td>${d.v5_vv}</td>
                    <td style="text-align:center;">${d.v6_quota}</td>`
                    /*for (i = 0; i<d.v7_conso.length; i++){
                        tags += `<td>${d.v7_conso[i]}</td>`
                    }*/
                    for (i = 0; i<d.v8_part.length; i++){
                        if (d.v8_part[i]<30){
                            tags += `<td style="background-image: linear-gradient(to top, 
                                        #00FF00 ${d.v8_part[i]}%, #FFFFFF ${d.v8_part[i]}%);"
                                        class="transparent">${d.v7_conso[i]}</td>`
                        }
                        if (d.v8_part[i]>=30 & d.v8_part[i]<40){
                            tags += `<td style="background-image: linear-gradient(to top, 
                                        #20F900 ${d.v8_part[i]}%, #FFFFFF ${d.v8_part[i]}%);"
                                        class="transparent">${d.v7_conso[i]}</td>`
                        }
                        if (d.v8_part[i]>=40 & d.v8_part[i]<50){
                            tags += `<td style="background-image: linear-gradient(to top, 
                                        #40F300 ${d.v8_part[i]}%, #FFFFFF ${d.v8_part[i]}%);"
                                        class="transparent">${d.v7_conso[i]}</td>`
                        }
                        if (d.v8_part[i]>=50 & d.v8_part[i]<60){
                            tags += `<td style="background-image: linear-gradient(to top, 
                                        #80E600 ${d.v8_part[i]}%, #FFFFFF ${d.v8_part[i]}%);"
                                        class="transparent">${d.v7_conso[i]}</td>`
                        }
                        if (d.v8_part[i]>=60 & d.v8_part[i]<70){
                            tags += `<td style="background-image: linear-gradient(to top, 
                                        #C0D900 ${d.v8_part[i]}%, #FFFFFF ${d.v8_part[i]}%);"
                                        class="transparent">${d.v7_conso[i]}</td>`
                        }
                        if (d.v8_part[i]>=70 & d.v8_part[i]<80){
                            tags += `<td style="background-image: linear-gradient(to top, 
                                        #E0D300 ${d.v8_part[i]}%, #FFFFFF ${d.v8_part[i]}%);"
                                        class="transparent">${d.v7_conso[i]}</td>`
                        }
                        if (d.v8_part[i]>=80 & d.v8_part[i]<90){
                            tags += `<td style="background-image: linear-gradient(to top, 
                                        #F0D000 ${d.v8_part[i]}%, #FFFFFF ${d.v8_part[i]}%);"
                                        class="transparent">${d.v7_conso[i]}</td>`
                        }
                        if (d.v8_part[i]>=90 & d.v8_part[i]<92){
                            tags += `<td style="background-image: linear-gradient(to top, 
                                        #FFCC00 ${d.v8_part[i]}%, #FFFFFF ${d.v8_part[i]}%);"
                                        class="transparent">${d.v7_conso[i]}</td>`
                        }
                        if (d.v8_part[i]>=92 & d.v8_part[i]<94){
                            tags += `<td style="background-image: linear-gradient(to top, 
                                        #FF9F00 ${d.v8_part[i]}%, #FFFFFF ${d.v8_part[i]}%);"
                                        class="transparent">${d.v7_conso[i]}</td>`
                        }
                        if (d.v8_part[i]>=94 & d.v8_part[i]<96){
                            tags += `<td style="background-image: linear-gradient(to top, 
                                        #FF7100 ${d.v8_part[i]}%, #FFFFFF ${d.v8_part[i]}%);"
                                        class="transparent">${d.v7_conso[i]}</td>`
                        }
                        if (d.v8_part[i]>=96 & d.v8_part[i]<98){
                            tags += `<td style="background-image: linear-gradient(to top, 
                                        #FF4300 ${d.v8_part[i]}%, #FFFFFF ${d.v8_part[i]}%);"
                                        class="transparent">${d.v7_conso[i]}</td>`
                        } 
                        if (d.v8_part[i]>=98){
                            tags += `<td style="background-image: linear-gradient(to top, 
                                        #FF1500 ${d.v8_part[i]}%, #FFFFFF ${d.v8_part[i]}%);"
                                        class="transparent">${d.v7_conso[i]}</td>`
                        }
                    }
                    tags += `</tr>`
    })
    body.innerHTML = tags;
}