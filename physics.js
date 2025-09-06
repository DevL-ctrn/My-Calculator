function updatePhysicsInputs() {
    const container = document.getElementById('inputsContainer');
    const type = document.getElementById('calcType').value;
    container.innerHTML = '';

    switch(type) {
        case 'motion': // MRU
            container.innerHTML = `
                <label>Velocidade (v):</label><input type="number" id="v"><br>
                <label>Distância (d):</label><input type="number" id="d"><br>
                <label>Tempo (t):</label><input type="number" id="t"><br>
            `;
            break;
        case 'acceleration': // MRUA simples
            container.innerHTML = `
                <label>Velocidade final (v):</label><input type="number" id="v"><br>
                <label>Velocidade inicial (v0):</label><input type="number" id="v0"><br>
                <label>Aceleração (a):</label><input type="number" id="a"><br>
                <label>Tempo (t):</label><input type="number" id="t"><br>
                <label>Deslocamento (d):</label><input type="number" id="d"><br>
            `;
            break;
        case 'force': // F = m*a
            container.innerHTML = `
                <label>Força (F):</label><input type="number" id="F"><br>
                <label>Massa (m):</label><input type="number" id="m"><br>
                <label>Aceleração (a):</label><input type="number" id="a"><br>
            `;
            break;
        case 'weight': // P = m*g
            container.innerHTML = `
                <label>Peso (P):</label><input type="number" id="P"><br>
                <label>Massa (m):</label><input type="number" id="m"><br>
                <label>Gravidade (g):</label><input type="number" id="g" value="9.8"><br>
            `;
            break;
        case 'kineticEnergy': // Ec = 0.5*m*v^2
            container.innerHTML = `
                <label>Energia Cinética (E):</label><input type="number" id="E"><br>
                <label>Massa (m):</label><input type="number" id="m"><br>
                <label>Velocidade (v):</label><input type="number" id="v"><br>
            `;
            break;
        case 'potentialEnergy': // Ep = m*g*h
            container.innerHTML = `
                <label>Energia Potencial (Ep):</label><input type="number" id="Ep"><br>
                <label>Massa (m):</label><input type="number" id="m"><br>
                <label>Gravidade (g):</label><input type="number" id="g" value="9.8"><br>
                <label>Altura (h):</label><input type="number" id="h"><br>
            `;
            break;
        case 'pressure': // P = F/A
            container.innerHTML = `
                <label>Pressão (P):</label><input type="number" id="P"><br>
                <label>Força (F):</label><input type="number" id="F"><br>
                <label>Área (A):</label><input type="number" id="A"><br>
            `;
            break;

                 case 'ohm': // P = F/A
            container.innerHTML = `
                <label>Resistência (R):</label><input type="number" id="R"><br>
                <label>Intensidade (I):</label><input type="number" id="I"><br>
                <label>Tensão (U):</label><input type="number" id="U"><br>
            `;
            break;


        case 'work': // W = F*d*cosθ
            container.innerHTML = `
                <label>Trabalho (W):</label><input type="number" id="W"><br>
                <label>Força (F):</label><input type="number" id="F"><br>
                <label>Deslocamento (d):</label><input type="number" id="d"><br>
                <label>Ângulo (θ em graus):</label><input type="number" id="theta"><br>
            `;
            break;
        case 'power': // P = W/t
            container.innerHTML = `
                <label>Potência (P):</label><input type="number" id="P"><br>
                <label>Trabalho (W):</label><input type="number" id="W"><br>
                <label>Tempo (t):</label><input type="number" id="t"><br>
            `;
            break;

              case 'density': // P = W/t
            container.innerHTML = `
                <label>Densidade (p):</label><input type="number" id="p"><br>
                <label>massa (m):</label><input type="number" id="m"><br>
                <label>Volume (V):</label><input type="number" id="V"><br>
            `;
            break;

                case 'idealGas': // PV = nRT
            container.innerHTML = `
                <label>Pressão (P):</label><input type="number" id="P"><br>
                <label>Volume (V):</label><input type="number" id="V"><br>
                <label>N mols (n):</label><input type="number" id="n"><br>
                <label>Constante (R):</label><input type="number" id="R" value="0.082"><br>
                <label>Temperatura (T em K):</label><input type="number" id="T"><br>
            `;
            break;
        case 'angularVelocity': // ω = θ/t
            container.innerHTML = `
                <label>Velocidade angular (ω):</label><input type="number" id="w"><br>
                <label>Ângulo (θ em rad):</label><input type="number" id="theta"><br>
                <label>Tempo (t):</label><input type="number" id="t"><br>
            `;
            break;
        case 'centripetal': // ac = v²/r
            container.innerHTML = `
                <label>Aceleração centrípeta (ac):</label><input type="number" id="ac"><br>
                <label>Velocidade (v):</label><input type="number" id="v"><br>
                <label>Raio (r):</label><input type="number" id="r"><br>
            `;
            break;

             case 'periodFrequency': // T = 1/f
            container.innerHTML = `
                <label>Período (T):</label><input type="number" id="T"><br>
                <label>Frequência (f):</label><input type="number" id="f"><br>
            `;
            break;

            case 'coulomb':
    container.innerHTML = `
        <label>Força elétrica (F):</label><input type="number" id="F"><br>
        <label>Carga 1 (q1):</label><input type="number" id="q1"><br>
        <label>Carga 2 (q2):</label><input type="number" id="q2"><br>
        <label>Distância (r):</label><input type="number" id="r"><br>
        <label>Constante k (N·m²/C²):</label><input type="number" id="k" value="8.988e9"><br>
    `;
    break;

            
        default:
            break;
    }
}

// Função auxiliar para checar quantas variáveis estão vazias
function getValues(ids) {
    let values = {};
    let emptyCount = 0;
    let emptyVar = '';
    ids.forEach(id => {
        const val = document.getElementById(id).value;
        if(val === '') {
            emptyCount++;
            emptyVar = id;
        } else {
            values[id] = parseFloat(val);
        }
    });
    return { values, emptyCount, emptyVar };
}

// Função principal
function calculatePhysics() {
    const type = document.getElementById('calcType').value;
    let result = '';

    switch(type) {
        case 'motion':
            var { values, emptyCount, emptyVar } = getValues(['v','d','t']);
            if(emptyCount !== 1) { result = 'Preencha exatamente duas variáveis.'; break; }
            if(emptyVar==='v') result='Velocidade (v)='+(values.d/values.t).toFixed(2);
            if(emptyVar==='d') result='Distância (d)='+(values.v*values.t).toFixed(2);
            if(emptyVar==='t') result='Tempo (t)='+(values.d/values.v).toFixed(2);
            break;

        case 'acceleration':
            var { values, emptyCount, emptyVar } = getValues(['v','v0','a','t','d']);
            if(emptyCount !== 1) { result='Preencha exatamente quatro variáveis.'; break; }
            if(emptyVar==='v') result='v='+(values.v0+values.a*values.t).toFixed(2);
            if(emptyVar==='v0') result='v0='+(values.v-values.a*values.t).toFixed(2);
            if(emptyVar==='a') result='a='+(values.v0!==undefined && values.t!==undefined ? (values.v-values.v0)/values.t : (values.v*2-values.v0*2)/(2*values.d)).toFixed(2);
            if(emptyVar==='t') result='t='+(values.v0!==undefined && values.a!==undefined ? (values.v-values.v0)/values.a : undefined);
            if(emptyVar==='d') result='d='+(values.v0*values.t + 0.5*values.a*values.t**2).toFixed(2);
            break;

        case 'force':
            var { values, emptyCount, emptyVar } = getValues(['F','m','a']);
            if(emptyCount!==1){result='Preencha exatamente duas variáveis.'; break;}
            if(emptyVar==='F') result='Força (F)='+(values.m*values.a).toFixed(2);
            if(emptyVar==='m') result='Massa (m)='+(values.F/values.a).toFixed(2);
            if(emptyVar==='a') result='Aceleração (a)='+(values.F/values.m).toFixed(2);
            break;

             case 'ohm':
            var { values, emptyCount, emptyVar } = getValues(['R','I','U']);
            if(emptyCount!==1){result='Preencha exatamente duas variáveis.'; break;}
            if(emptyVar==='R') result='Resistência (R)='+(values.U/values.I).toFixed(2);
            if(emptyVar==='I') result='Intensidade (I)='+(values.U/values.R).toFixed(2);
            if(emptyVar==='U') result='Tensão (U)='+(values.I*values.R).toFixed(2);
            break;

            case 'coulomb':
    var { values, emptyCount, emptyVar } = getValues(['F','q1','q2','r','k']);
    if(emptyCount!==1){result='Preencha exatamente quatro variáveis.'; break;}
    if(emptyVar==='F') result='Força elétrica (F)='+(values.k*values.q1*values.q2/(values.r**2)).toExponential(3);
    if(emptyVar==='q1') result='Carga q1='+(values.F*values.r**2/(values.k*values.q2)).toExponential(3);
    if(emptyVar==='q2') result='Carga q2='+(values.F*values.r**2/(values.k*values.q1)).toExponential(3);
    if(emptyVar==='r') result='Distância (r)='+(Math.sqrt(values.k*values.q1*values.q2/values.F)).toExponential(3);
    if(emptyVar==='k') result='Constante k='+(values.F*values.r**2/(values.q1*values.q2)).toExponential(3);
    break;
    
        case 'weight':
            var { values, emptyCount, emptyVar } = getValues(['P','m','g']);
            if(emptyCount!==1){result='Preencha exatamente duas variáveis.'; break;}
            if(emptyVar==='P') result='Peso (P)='+(values.m*values.g).toFixed(2);
            if(emptyVar==='m') result='Massa (m)='+(values.P/values.g).toFixed(2);
            if(emptyVar==='g') result='Gravidade (g)='+(values.P/values.m).toFixed(2);
            break;

              case 'density':
            var { values, emptyCount, emptyVar } = getValues(['p','m','V']);
            if(emptyCount!==1){result='Preencha exatamente duas variáveis.'; break;}
            if(emptyVar==='p') result='Densidade (p)='+(values.m/values.V).toFixed(2);
            if(emptyVar==='m') result='Massa (m)='+(values.p*values.V).toFixed(2);
            if(emptyVar==='V') result='Volume (V)='+(values.m/values.p).toFixed(2);
            break;

        case 'kineticEnergy':
            var { values, emptyCount, emptyVar } = getValues(['E','m','v']);
            if(emptyCount!==1){result='Preencha exatamente duas variáveis.'; break;}
            if(emptyVar==='E') result='Energia (E)='+(0.5*values.m*values.v**2).toFixed(2);
            if(emptyVar==='m') result='Massa (m)='+(2*values.E/(values.v**2)).toFixed(2);
            if(emptyVar==='v') result='Velocidade (v)='+(Math.sqrt(2*values.E/values.m)).toFixed(2);
            break;

        case 'potentialEnergy':
            var { values, emptyCount, emptyVar } = getValues(['Ep','m','g','h']);
            if(emptyCount!==1){result='Preencha exatamente três variáveis.'; break;}

             case 'idealGas':
            var { values, emptyCount, emptyVar } = getValues(['P','V','n','R','T']);
            if(emptyCount!==1){result='Preencha exatamente quatro variáveis.'; break;}
            if(emptyVar==='P') result='Pressão (P)='+(values.n*values.R*values.T/values.V).toFixed(2);
            if(emptyVar==='V') result='Volume (V)='+(values.n*values.R*values.T/values.P).toFixed(2);
            if(emptyVar==='n') result='N mols (n)='+(values.P*values.V/(values.R*values.T)).toFixed(2);
            if(emptyVar==='R') result='Constante (R)='+(values.P*values.V/(values.n*values.T)).toFixed(4);
            if(emptyVar==='T') result='Temperatura (T)='+(values.P*values.V/(values.n*values.R)).toFixed(2);
            break;

        case 'angularVelocity':
            var { values, emptyCount, emptyVar } = getValues(['w','theta','t']);
            if(emptyCount!==1){result='Preencha exatamente duas variáveis.'; break;}
            if(emptyVar==='w') result='ω='+(values.theta/values.t).toFixed(2);
            if(emptyVar==='theta') result='θ='+(values.w*values.t).toFixed(2);
            if(emptyVar==='t') result='t='+(values.theta/values.w).toFixed(2);
            break;

              case 'centripetal':
            var { values, emptyCount, emptyVar } = getValues(['ac','v','r']);
            if(emptyCount!==1){result='Preencha exatamente duas variáveis.'; break;}
            if(emptyVar==='ac') result='aₐc='+(values.v**2/values.r).toFixed(2);
            if(emptyVar==='v') result='v='+(Math.sqrt(values.ac*values.r)).toFixed(2);
            if(emptyVar==='r') result='r='+(values.v**2/values.ac).toFixed(2);
            break;

       


if(emptyVar==='Ep') result='Energia Potencial (Ep)='+(values.m*values.g*values.h).toFixed(2);
            if(emptyVar==='m') result='Massa (m)='+(values.Ep/(values.g*values.h)).toFixed(2);
            if(emptyVar==='g') result='Gravidade (g)='+(values.Ep/(values.m*values.h)).toFixed(2);
            if(emptyVar==='h') result='Altura (h)='+(values.Ep/(values.m*values.g)).toFixed(2);
            break;

             case 'periodFrequency':
            var { values, emptyCount, emptyVar } = getValues(['T','f']);
            if(emptyCount!==1){result='Preencha exatamente uma variável.'; break;}
            if(emptyVar==='T') result='Período (T)='+(1/values.f).toFixed(4);
            if(emptyVar==='f') result='Frequência (f)='+(1/values.T).toFixed(4);
            break;

        case 'pressure':
            var { values, emptyCount, emptyVar } = getValues(['P','F','A']);
            if(emptyCount!==1){result='Preencha exatamente duas variáveis.'; break;}
            if(emptyVar==='P') result='Pressão (P)='+(values.F/values.A).toFixed(2);
            if(emptyVar==='F') result='Força (F)='+(values.P*values.A).toFixed(2);
            if(emptyVar==='A') result='Área (A)='+(values.F/values.P).toFixed(2);
            break;

        case 'work':
            var { values, emptyCount, emptyVar } = getValues(['W','F','d','theta']);
            if(emptyCount!==1){result='Preencha exatamente três variáveis.'; break;}
            if(emptyVar==='W') result='Trabalho (W)='+(values.F*values.d*Math.cos(values.theta*Math.PI/180)).toFixed(2);
            if(emptyVar==='F') result='Força (F)='+(values.W/(values.d*Math.cos(values.theta*Math.PI/180))).toFixed(2);
            if(emptyVar==='d') result='Deslocamento (d)='+(values.W/(values.F*Math.cos(values.theta*Math.PI/180))).toFixed(2);
            if(emptyVar==='theta') result='Ângulo (θ)='+(Math.acos(values.W/(values.F*values.d))*180/Math.PI).toFixed(2);
            break;

        case 'power':
            var { values, emptyCount, emptyVar } = getValues(['P','W','t']);
            if(emptyCount!==1){result='Preencha exatamente duas variáveis.'; break;}
            if(emptyVar==='P') result='Potência (P)='+(values.W/values.t).toFixed(2);
            if(emptyVar==='W') result='Trabalho (W)='+(values.P*values.t).toFixed(2);
            if(emptyVar==='t') result='Tempo (t)='+(values.W/values.P).toFixed(2);
            break;

        default:
            result='Escolha um cálculo válido!';
    }

    document.getElementById('result').textContent = 'Resultado: ' + result;
}