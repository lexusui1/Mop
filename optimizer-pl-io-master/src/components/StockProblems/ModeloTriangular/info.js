import React, {useState} from "react";
import {Button, Container, Row, Col, Card, CardText,CardTitle, Jumbotron, Collapse} from "reactstrap";

import {Link} from 'react-router-dom';
import '../index.css'
import MathJax from "react-mathjax"

const tex = 'f(x) = \\frac{1}{\\sqrt{x^2 + 1}}'

const Info = () => {
    //DEFINIMOS ESTOS ESTADOS PARA MANEJAR LOS COLLAPSE
    //Para controlar el collapse de Hipotesis
    const [collapseHipotesis, setCollapseHipotesis] = useState(false);
    const [statusHipotesis, setStatusHipotesis] = useState('+');
    const onEnteredHipotesis = () => setStatusHipotesis('-');
    const onExitedHipotesis = () => setStatusHipotesis('+');
    const toggleHipotesis = () => setCollapseHipotesis(!collapseHipotesis);

    //Para controlar el collapse de Formulas
    const [collapseFormulas, setCollapseFormulas] = useState(false);
    const [statusFormulas, setStatusFormulas] = useState('+');
    const onEnteredFormulas = () => setStatusFormulas('-');
    const onExitedFormulas = () => setStatusFormulas('+');
    const toggleFormulas = () => setCollapseFormulas(!collapseFormulas);

    //Para controlar el collapse de Variables
    const [collapseVariables, setCollapseVariables] = useState(false);
    const [statusVariables, setStatusVariables] = useState('+');
    const onEnteredVariables = () => setStatusVariables('-');
    const onExitedVariables = () => setStatusVariables('+');
    const toggleVariables = () => setCollapseVariables(!collapseVariables);
    return(
    <Container fluid className="App">
      <Row>
        <Col xs={12} md={6} className="mx-auto my-5">
          <Jumbotron>

              
            <Row className="justify-content-center">
                <div>
                    <h2>Modelo Triangular</h2><br></br>
                </div>
            </Row>
            
            <Row style={{marginBottom:10}}>
                <Card body outline color="secondary" >
                    <Row className="justify-content-center" onClick={toggleHipotesis} style={{cursor:"pointer"}}>
                        <h5><b>Hip??tesis {statusHipotesis}</b></h5>
                    </Row>
                    <Collapse isOpen={collapseHipotesis} onEntered={onEnteredHipotesis} onExited={onExitedHipotesis}>
                        <ul className='lista'>
                            <li>No tenemos en cuenta si contamos o no con los recursos financieros.</li>
                            <li>No hay inflaci??n.</li>
                            <li>Demanda constante y conocida.</li>
                            <li>Resposici??n se hace a una tasa constante ????.</li>
                            <li>Costo unitario de almacenamiento por unidad de tiempo ????1, constante.</li>
                            <li>Costo de preparacion ????, constante.</li>
                            <li>Costo unitario de producto ????, constante.</li>
                            <li>No existen otros costos.</li>
                            <li>No existen restricciones.</li>
                            <li>Al comienzo de cada periodo no hay stock ni pedidos insatisfechos.</li>
                        </ul>
                    </Collapse>
                </Card>
            </Row>
            <Row style={{marginBottom:10}}>
                <Card body outline color="secondary">
                <Row className="justify-content-center" onClick={toggleFormulas} style={{cursor:"pointer"}}>
                    <h5><b>F??rmulas {statusFormulas}</b></h5>
                </Row>

                <Collapse isOpen={collapseFormulas} onEntered={onEnteredFormulas} onExited={onExitedFormulas}>      
                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={"Costo Total De Preparacion = \\frac{D}{q}*K"} />
                        </div>
                    </MathJax.Provider>
                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={"Costo Total Del Producto = b*D"} />
                        </div>
                    </MathJax.Provider>
                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={"Costo Total De Almacenamiento = \\frac{1}{2}*q*T*c1*(1-\\frac{d}{p})"} />
                        </div>
                    </MathJax.Provider>
                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={"Costo Total Esperado = \\frac{D}{q}*K + b*K + \\frac{1}{2}*q*T*c1*(1-\\frac{d}{p}) "} />
                        </div>
                    </MathJax.Provider>    
                    <MathJax.Provider>
                        <div>
                            <MathJax.Node formula={"q_{0} = \\sqrt{\\frac{2*K*D}{c1*(1-\\frac{d}{p})*T}} = \\sqrt{\\frac{2*K*d}{c1*(1-\\frac{d}{p})}} = \\sqrt{\\frac{2*K*d*p}{c1*(p-d)}}  "} />
                        </div>
                    </MathJax.Provider>
                </Collapse>
                </Card>
            </Row>
            <Row style={{marginBottom:10}}>
                <Card body outline color="secondary">
                    <Row className="justify-content-center" onClick={toggleVariables} style={{cursor:"pointer"}}>
                        <h5><b>Variables {statusVariables}</b></h5>
                    </Row>

                    <Collapse isOpen={collapseVariables} onEntered={onEnteredVariables} onExited={onExitedVariables}>
                        <ul className='text-left'>
                            <li><b>D: </b>Demanda</li>
                            <li><b>d: </b>Demanda Unitaria</li>                        
                            <li><b>K: </b>Costo de Preparaci??n</li>
                            <li><b>c1: </b>Costo de Almacenamiento</li>
                            <li><b>b: </b>Costo Unitario del Producto</li>
                            <li><b>p: </b>Velocidad de Reposici??n</li>
                            <li><b>s: </b>Stock almacenado</li>
                            <li><b>T: </b>Tiempo Total</li>
                            <li><b>CTPrep: </b>Costo Total de Preparaci??n</li>
                            <li><b>CTProd: </b>Costo Total propio del producto</li>
                            <li><b>CTA: </b>Costo Total de Almacenamiento</li>
                            <li><b>CTE: </b>Costo Total Esperado</li>
                        </ul>
                    </Collapse>
                </Card>
            </Row>
            <Row className="justify-content-left">
                <Card body outline color="secondary">
                    <CardTitle><b>Bibliograf??a</b></CardTitle>
                    <CardText>Claudio L. R. Sturla</CardText>
                </Card>
            </Row>
            
            <Row className="btn-volver justify-content-center">
                <Link to='/StockProblems'><Button>Volver</Button></Link>
            </Row>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
    )
    };
export default Info;