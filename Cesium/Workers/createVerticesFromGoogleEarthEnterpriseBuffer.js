define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-a8ce88a9","./Transforms-31e2659a","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./AttributeCompression-88d6db09","./IntersectionTests-836e8b79","./Plane-ef10ab79","./WebMercatorProjection-163698a4","./createTaskProcessorWorker","./EllipsoidTangentPlane-5d1ab0af","./OrientedBoundingBox-fd971f99","./TerrainEncoding-110605ff"],function(We,e,Fe,Oe,Ye,ke,t,i,a,n,r,Ue,o,Ve,He,Le){"use strict";var De=Uint16Array.BYTES_PER_ELEMENT,Ge=Int32Array.BYTES_PER_ELEMENT,je=Uint32Array.BYTES_PER_ELEMENT,ze=Float32Array.BYTES_PER_ELEMENT,qe=Float64Array.BYTES_PER_ELEMENT;function Je(e,t,i){i=We.defaultValue(i,Fe.CesiumMath);for(var a=e.length,n=0;n<a;++n)if(i.equalsEpsilon(e[n],t,Fe.CesiumMath.EPSILON12))return n;return-1}var Ke=new Oe.Cartographic,Qe=new Oe.Cartesian3,Xe=new Oe.Cartesian3,Ze=new Oe.Cartesian3,$e=new Ye.Matrix4;function et(e,t,i,a,n,r,o,s,u,h){for(var c=o.length,d=0;d<c;++d){var g=o[d],l=g.cartographic,m=g.index,p=e.length,I=l.longitude,v=l.latitude,v=Fe.CesiumMath.clamp(v,-Fe.CesiumMath.PI_OVER_TWO,Fe.CesiumMath.PI_OVER_TWO),E=l.height-r.skirtHeight;r.hMin=Math.min(r.hMin,E),Oe.Cartographic.fromRadians(I,v,E,Ke),u&&(Ke.longitude+=s),u?d===c-1?Ke.latitude+=h:0===d&&(Ke.latitude-=h):Ke.latitude+=s;var T=r.ellipsoid.cartographicToCartesian(Ke);e.push(T),t.push(E),i.push(Oe.Cartesian2.clone(i[m])),0<a.length&&a.push(a[m]),Ye.Matrix4.multiplyByPoint(r.toENU,T,Qe);var f=r.minimum,C=r.maximum;Oe.Cartesian3.minimumByComponent(Qe,f,f),Oe.Cartesian3.maximumByComponent(Qe,C,C);var M,N=r.lastBorderPoint;We.defined(N)&&(M=N.index,n.push(M,p-1,p,p,m,M)),r.lastBorderPoint=g}}return o(function(e,t){e.ellipsoid=Oe.Ellipsoid.clone(e.ellipsoid),e.rectangle=Oe.Rectangle.clone(e.rectangle);var i=function(e,t,i,a,n,r,o,s,u,h){var c,d,g,l,m,p;p=We.defined(a)?(c=a.west,d=a.south,g=a.east,l=a.north,m=a.width,a.height):(c=Fe.CesiumMath.toRadians(n.west),d=Fe.CesiumMath.toRadians(n.south),g=Fe.CesiumMath.toRadians(n.east),l=Fe.CesiumMath.toRadians(n.north),m=Fe.CesiumMath.toRadians(a.width),Fe.CesiumMath.toRadians(a.height));var I,v,E=[d,l],T=[c,g],f=Ye.Transforms.eastNorthUpToFixedFrame(t,i),C=Ye.Matrix4.inverseTransformation(f,$e);s&&(I=Ue.WebMercatorProjection.geodeticLatitudeToMercatorAngle(d),v=1/(Ue.WebMercatorProjection.geodeticLatitudeToMercatorAngle(l)-I));var M=new DataView(e),N=Number.POSITIVE_INFINITY,x=Number.NEGATIVE_INFINITY,b=Xe;b.x=Number.POSITIVE_INFINITY,b.y=Number.POSITIVE_INFINITY,b.z=Number.POSITIVE_INFINITY;var S=Ze;S.x=Number.NEGATIVE_INFINITY,S.y=Number.NEGATIVE_INFINITY,S.z=Number.NEGATIVE_INFINITY;var w,P,B=0,y=0,A=0;for(P=0;P<4;++P){var R=B;w=M.getUint32(R,!0),R+=je;var _=Fe.CesiumMath.toRadians(180*M.getFloat64(R,!0));R+=qe,-1===Je(T,_)&&T.push(_);var W=Fe.CesiumMath.toRadians(180*M.getFloat64(R,!0));R+=qe,-1===Je(E,W)&&E.push(W),R+=2*qe;var F=M.getInt32(R,!0);R+=Ge,y+=F,F=M.getInt32(R,!0),A+=3*F,B+=w+je}var O=[],Y=[],k=new Array(y),U=new Array(y),V=new Array(y),H=s?new Array(y):[],L=new Array(A),D=[],G=[],j=[],z=[],q=0,J=0;for(P=B=0;P<4;++P){w=M.getUint32(B,!0);var K=B+=je,Q=Fe.CesiumMath.toRadians(180*M.getFloat64(B,!0));B+=qe;var X=Fe.CesiumMath.toRadians(180*M.getFloat64(B,!0));B+=qe;var Z=Fe.CesiumMath.toRadians(180*M.getFloat64(B,!0)),$=.5*Z;B+=qe;var ee=Fe.CesiumMath.toRadians(180*M.getFloat64(B,!0)),te=.5*ee;B+=qe;var ie=M.getInt32(B,!0);B+=Ge;var ae=M.getInt32(B,!0);B+=Ge,B+=Ge;for(var ne=new Array(ie),re=0;re<ie;++re){var oe=Q+M.getUint8(B++)*Z;Ke.longitude=oe;var se=X+M.getUint8(B++)*ee;Ke.latitude=se;var ue=M.getFloat32(B,!0);if(B+=ze,0!==ue&&ue<h&&(ue*=-Math.pow(2,u)),ue*=6371010*r,Ke.height=ue,-1!==Je(T,oe)||-1!==Je(E,se)){var he=Je(O,Ke,Oe.Cartographic);if(-1!==he){ne[re]=Y[he];continue}O.push(Oe.Cartographic.clone(Ke)),Y.push(q)}ne[re]=q,Math.abs(oe-c)<$?D.push({index:q,cartographic:Oe.Cartographic.clone(Ke)}):Math.abs(oe-g)<$?j.push({index:q,cartographic:Oe.Cartographic.clone(Ke)}):Math.abs(se-d)<te?G.push({index:q,cartographic:Oe.Cartographic.clone(Ke)}):Math.abs(se-l)<te&&z.push({index:q,cartographic:Oe.Cartographic.clone(Ke)}),N=Math.min(ue,N),x=Math.max(ue,x),V[q]=ue;var ce=i.cartographicToCartesian(Ke);k[q]=ce,s&&(H[q]=(Ue.WebMercatorProjection.geodeticLatitudeToMercatorAngle(se)-I)*v),Ye.Matrix4.multiplyByPoint(C,ce,Qe),Oe.Cartesian3.minimumByComponent(Qe,b,b),Oe.Cartesian3.maximumByComponent(Qe,S,S);var de=(oe-c)/(g-c);de=Fe.CesiumMath.clamp(de,0,1);var ge=(se-d)/(l-d);ge=Fe.CesiumMath.clamp(ge,0,1),U[q]=new Oe.Cartesian2(de,ge),++q}for(var le=3*ae,me=0;me<le;++me,++J)L[J]=ne[M.getUint16(B,!0)],B+=De;if(w!==B-K)throw new ke.RuntimeError("Invalid terrain tile.")}k.length=q,U.length=q,V.length=q,s&&(H.length=q);var pe=q,Ie=J,ve={hMin:N,lastBorderPoint:void 0,skirtHeight:o,toENU:C,ellipsoid:i,minimum:b,maximum:S};D.sort(function(e,t){return t.cartographic.latitude-e.cartographic.latitude}),G.sort(function(e,t){return e.cartographic.longitude-t.cartographic.longitude}),j.sort(function(e,t){return e.cartographic.latitude-t.cartographic.latitude}),z.sort(function(e,t){return t.cartographic.longitude-e.cartographic.longitude});var Ee=1e-5;{var Te,fe,Ce;et(k,V,U,H,L,ve,D,-Ee*m,!0,-Ee*p),et(k,V,U,H,L,ve,G,-Ee*p,!1),et(k,V,U,H,L,ve,j,Ee*m,!0,Ee*p),et(k,V,U,H,L,ve,z,Ee*p,!1),0<D.length&&0<z.length&&(Te=D[0].index,fe=z[z.length-1].index,Ce=k.length-1,L.push(fe,Ce,pe,pe,Te,fe))}y=k.length;var Me,Ne=Ye.BoundingSphere.fromPoints(k);We.defined(a)&&(Me=He.OrientedBoundingBox.fromRectangle(a,N,x,i));for(var xe=new Le.EllipsoidalOccluder(i).computeHorizonCullingPointPossiblyUnderEllipsoid(t,k,N),be=new Ve.AxisAlignedBoundingBox(b,S,t),Se=new Le.TerrainEncoding(be,ve.hMin,x,f,!1,s),we=new Float32Array(y*Se.getStride()),Pe=0,Be=0;Be<y;++Be)Pe=Se.encode(we,Pe,k[Be],U[Be],V[Be],void 0,H[Be]);var ye=D.map(function(e){return e.index}).reverse(),Ae=G.map(function(e){return e.index}).reverse(),Re=j.map(function(e){return e.index}).reverse(),_e=z.map(function(e){return e.index}).reverse();return Ae.unshift(Re[Re.length-1]),Ae.push(ye[0]),_e.unshift(ye[ye.length-1]),_e.push(Re[0]),{vertices:we,indices:new Uint16Array(L),maximumHeight:x,minimumHeight:N,encoding:Se,boundingSphere3D:Ne,orientedBoundingBox:Me,occludeePointInScaledSpace:xe,vertexCountWithoutSkirts:pe,indexCountWithoutSkirts:Ie,westIndicesSouthToNorth:ye,southIndicesEastToWest:Ae,eastIndicesNorthToSouth:Re,northIndicesWestToEast:_e}}(e.buffer,e.relativeToCenter,e.ellipsoid,e.rectangle,e.nativeRectangle,e.exaggeration,e.skirtHeight,e.includeWebMercatorT,e.negativeAltitudeExponentBias,e.negativeElevationThreshold),a=i.vertices;t.push(a.buffer);var n=i.indices;return t.push(n.buffer),{vertices:a.buffer,indices:n.buffer,numberOfAttributes:i.encoding.getStride(),minimumHeight:i.minimumHeight,maximumHeight:i.maximumHeight,boundingSphere3D:i.boundingSphere3D,orientedBoundingBox:i.orientedBoundingBox,occludeePointInScaledSpace:i.occludeePointInScaledSpace,encoding:i.encoding,vertexCountWithoutSkirts:i.vertexCountWithoutSkirts,indexCountWithoutSkirts:i.indexCountWithoutSkirts,westIndicesSouthToNorth:i.westIndicesSouthToNorth,southIndicesEastToWest:i.southIndicesEastToWest,eastIndicesNorthToSouth:i.eastIndicesNorthToSouth,northIndicesWestToEast:i.northIndicesWestToEast}})});
