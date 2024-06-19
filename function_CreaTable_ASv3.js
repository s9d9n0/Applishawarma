
function getTableHead(Periode,DataRef) {
    
    const jours = Periode;
    // jours.map(d =>{
    //     console.log("jours -> : "+ d.periode);
    // });

    const column = Object.keys(DataRef[0]);
    // const column = Object.keys(Data[0]);
    const head = document.querySelector('thead');
    let tags = "<tr>";
        // tags += `<th rowspan=3 onclick="sortTable(0)">zone</th>`;
        tags += `<th rowspan=3 onclick="sortTable(0)">gebiet</th>`;

        // on sort ces 2 colonnes ci-dessous de l'entete inutiles avec le formulaire
        // tags += `<th rowspan=2 onclick="sortTable(2)">quart.</th>`;
        // tags += `<th rowspan=2 onclick="sortTable(3)">type</th>`;

        // tags += `<th rowspan=3 onclick="sortTable(1)">nom</th>`;
        tags += `<th rowspan=3 onclick="sortTable(1)">raum</th>`;

        // tags += `<th rowspan=3 onclick="sortTable(2)">quota</th>`;
        tags += `<th rowspan=3 onclick="sortTable(2)">quoten</th>`;

        // tags += `<th colspan=30 class="largeur">conso / % utilisation</th>`;
        tags += `<th colspan=30 class="largeur">verbraucht / % nutzung</th>`;

    tags += "</tr><tr>";

    jours.map(d =>{
        tags += `<th colspan=2 class="heure">${d.periode}</th>`;
    });

    tags += "</tr><tr>";

    for (let j=1; j<16; j++){
        tags += `<th class="heure">00<sup>h</sup></th><th class="heure">12<sup>h</sup></th>`;
    }

    tags += "</tr>";        
    head.innerHTML = tags;
}

function getTableBody(DataRef){
    const body = document.querySelector('tbody');
    let tags = "";
                        // on sort ces 2 colonnes du corps inutiles avec le formulaire
                        // <td style="text-align:center;">${d.v2_quartier}</td>
                        // <td>${d.v3_type}</td>
    DataRef.map(d =>{

        tags += `<tr>

            <td>${d.v1_dc_zone}</td>

            <td>${d.v4_vv}</td>`

            if (d.v5_quota==undefined){
                tags += `<td style="text-align:center;"><i>??</i></td>`
            } else {
                tags += `<td style="text-align:center;">${d.v5_quota}</td>`
            }

            for (i = 0; i<d.v7_part.length; i++){
                if (d.v7_part[i]=="NA"){
                    tags += `<td  
                    style="background-color:white; transform:rotate(-45deg) scale(0.7);
                           text-align:center; vertical-align:center;">n.d.</td>`}
                if (d.v7_part[i]<30){
                    tags += `<td style="background-image: linear-gradient(to top, 
                    #00FF00 ${d.v7_part[i]}%, #FFFFFF ${d.v7_part[i]}%);"
                    class="transparent">${d.v6_conso[i]}</td>`}
                if (d.v7_part[i]>=30 & d.v7_part[i]<40){
                    tags += `<td style="background-image: linear-gradient(to top, 
                    #20F900 ${d.v7_part[i]}%, #FFFFFF ${d.v7_part[i]}%);"
                    class="transparent">${d.v6_conso[i]}</td>`}
                if (d.v7_part[i]>=40 & d.v7_part[i]<50){
                    tags += `<td style="background-image: linear-gradient(to top, 
                    #40F300 ${d.v7_part[i]}%, #FFFFFF ${d.v7_part[i]}%);"
                    class="transparent">${d.v6_conso[i]}</td>`}
                if (d.v7_part[i]>=50 & d.v7_part[i]<60){
                    tags += `<td style="background-image: linear-gradient(to top, 
                    #80E600 ${d.v7_part[i]}%, #FFFFFF ${d.v7_part[i]}%);"
                    class="transparent">${d.v6_conso[i]}</td>`}
                if (d.v7_part[i]>=60 & d.v7_part[i]<70){
                    tags += `<td style="background-image: linear-gradient(to top, 
                    #C0D900 ${d.v7_part[i]}%, #FFFFFF ${d.v7_part[i]}%);"
                    class="transparent">${d.v6_conso[i]}</td>`}
                if (d.v7_part[i]>=70 & d.v7_part[i]<80){
                    tags += `<td style="background-image: linear-gradient(to top, 
                    #E0D300 ${d.v7_part[i]}%, #FFFFFF ${d.v7_part[i]}%);"
                    class="transparent">${d.v6_conso[i]}</td>`}
                if (d.v7_part[i]>=80 & d.v7_part[i]<90){
                    tags += `<td style="background-image: linear-gradient(to top, 
                    #F0D000 ${d.v7_part[i]}%, #FFFFFF ${d.v7_part[i]}%);"
                    class="transparent">${d.v6_conso[i]}</td>`}
                if (d.v7_part[i]>=90 & d.v7_part[i]<92){
                    tags += `<td style="background-image: linear-gradient(to top, 
                    #FFCC00 ${d.v7_part[i]}%, #FFFFFF ${d.v7_part[i]}%);"
                    class="transparent">${d.v6_conso[i]}</td>`}
                if (d.v7_part[i]>=92 & d.v7_part[i]<94){
                    tags += `<td style="background-image: linear-gradient(to top, 
                    #FF9F00 ${d.v7_part[i]}%, #FFFFFF ${d.v7_part[i]}%);"
                    class="transparent">${d.v6_conso[i]}</td>`}
                if (d.v7_part[i]>=94 & d.v7_part[i]<96){
                    tags += `<td style="background-image: linear-gradient(to top, 
                    #FF7100 ${d.v7_part[i]}%, #FFFFFF ${d.v7_part[i]}%);"
                    class="transparent">${d.v6_conso[i]}</td>`}
                if (d.v7_part[i]>=96 & d.v7_part[i]<98){
                    tags += `<td style="background-image: linear-gradient(to top, 
                    #FF4300 ${d.v7_part[i]}%, #FFFFFF ${d.v7_part[i]}%);"
                    class="transparent">${d.v6_conso[i]}</td>`} 
                if (d.v7_part[i]>=98){
                    tags += `<td style="background-image: linear-gradient(to top, 
                    #FF1500 ${d.v7_part[i]}%, #FFFFFF ${d.v7_part[i]}%);"
                    class="transparent">${d.v6_conso[i]}</td>`}
            }

        tags += `</tr>`
    })
    body.innerHTML = tags;
}