define(["exports","./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-a8ce88a9","./Transforms-31e2659a","./ComponentDatatype-6d99a1ee","./GeometryAttribute-60f5bf9c","./GeometryAttributes-4fcfcf40","./IndexDatatype-53503fee","./GeometryOffsetAttribute-7350d9af","./VertexFormat-7572c785"],function(t,ut,e,lt,ct,ft,dt,Ct,pt,yt,_t,d){"use strict";var ht=new ct.Cartesian3,vt=new ct.Cartesian3,At=new ct.Cartesian3,xt=new ct.Cartesian3,kt=new ct.Cartesian3,l=new ct.Cartesian3(1,1,1),bt=Math.cos,wt=Math.sin;function C(t){t=ut.defaultValue(t,ut.defaultValue.EMPTY_OBJECT);var e=ut.defaultValue(t.radii,l),a=ut.defaultValue(t.innerRadii,e),i=ut.defaultValue(t.minimumClock,0),r=ut.defaultValue(t.maximumClock,lt.CesiumMath.TWO_PI),n=ut.defaultValue(t.minimumCone,0),o=ut.defaultValue(t.maximumCone,lt.CesiumMath.PI),m=Math.round(ut.defaultValue(t.stackPartitions,64)),s=Math.round(ut.defaultValue(t.slicePartitions,64)),u=ut.defaultValue(t.vertexFormat,d.VertexFormat.DEFAULT);this._radii=ct.Cartesian3.clone(e),this._innerRadii=ct.Cartesian3.clone(a),this._minimumClock=i,this._maximumClock=r,this._minimumCone=n,this._maximumCone=o,this._stackPartitions=m,this._slicePartitions=s,this._vertexFormat=d.VertexFormat.clone(u),this._offsetAttribute=t.offsetAttribute,this._workerName="createEllipsoidGeometry"}C.packedLength=2*ct.Cartesian3.packedLength+d.VertexFormat.packedLength+7,C.pack=function(t,e,a){return a=ut.defaultValue(a,0),ct.Cartesian3.pack(t._radii,e,a),a+=ct.Cartesian3.packedLength,ct.Cartesian3.pack(t._innerRadii,e,a),a+=ct.Cartesian3.packedLength,d.VertexFormat.pack(t._vertexFormat,e,a),a+=d.VertexFormat.packedLength,e[a++]=t._minimumClock,e[a++]=t._maximumClock,e[a++]=t._minimumCone,e[a++]=t._maximumCone,e[a++]=t._stackPartitions,e[a++]=t._slicePartitions,e[a]=ut.defaultValue(t._offsetAttribute,-1),e};var a,p=new ct.Cartesian3,y=new ct.Cartesian3,_=new d.VertexFormat,h={radii:p,innerRadii:y,vertexFormat:_,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,offsetAttribute:void 0};C.unpack=function(t,e,a){e=ut.defaultValue(e,0);var i=ct.Cartesian3.unpack(t,e,p);e+=ct.Cartesian3.packedLength;var r=ct.Cartesian3.unpack(t,e,y);e+=ct.Cartesian3.packedLength;var n=d.VertexFormat.unpack(t,e,_);e+=d.VertexFormat.packedLength;var o=t[e++],m=t[e++],s=t[e++],u=t[e++],l=t[e++],c=t[e++],f=t[e];return ut.defined(a)?(a._radii=ct.Cartesian3.clone(i,a._radii),a._innerRadii=ct.Cartesian3.clone(r,a._innerRadii),a._vertexFormat=d.VertexFormat.clone(n,a._vertexFormat),a._minimumClock=o,a._maximumClock=m,a._minimumCone=s,a._maximumCone=u,a._stackPartitions=l,a._slicePartitions=c,a._offsetAttribute=-1===f?void 0:f,a):(h.minimumClock=o,h.maximumClock=m,h.minimumCone=s,h.maximumCone=u,h.stackPartitions=l,h.slicePartitions=c,h.offsetAttribute=-1===f?void 0:f,new C(h))},C.createGeometry=function(t){var e=t._radii;if(!(e.x<=0||e.y<=0||e.z<=0)){var a=t._innerRadii;if(!(a.x<=0||a.y<=0||a.z<=0)){var i=t._minimumClock,r=t._maximumClock,n=t._minimumCone,o=t._maximumCone,m=t._vertexFormat,s=t._slicePartitions+1,u=t._stackPartitions+1;(s=Math.round(s*Math.abs(r-i)/lt.CesiumMath.TWO_PI))<2&&(s=2),(u=Math.round(u*Math.abs(o-n)/lt.CesiumMath.PI))<2&&(u=2);var l=0,c=[n],f=[i];for(W=0;W<u;W++)c.push(n+W*(o-n)/(u-1));for(c.push(o),E=0;E<s;E++)f.push(i+E*(r-i)/(s-1));f.push(r);var d=c.length,C=f.length,p=0,y=1,_=a.x!==e.x||a.y!==e.y||a.z!==e.z,h=!1,v=!1,A=!1;_&&(y=2,0<n&&(h=!0,p+=s-1),o<Math.PI&&(v=!0,p+=s-1),(r-i)%lt.CesiumMath.TWO_PI?(A=!0,p+=2*(u-1)+1):p+=1);var x=C*d*y,k=new Float64Array(3*x),b=_t.arrayFill(new Array(x),!1),w=_t.arrayFill(new Array(x),!1),F=s*u*y,P=6*(F+p+1-(s+u)*y),g=yt.IndexDatatype.createTypedArray(F,P),V=m.normal?new Float32Array(3*x):void 0,M=m.tangent?new Float32Array(3*x):void 0,T=m.bitangent?new Float32Array(3*x):void 0,D=m.st?new Float32Array(2*x):void 0,G=new Array(d),L=new Array(d);for(W=0;W<d;W++)G[W]=wt(c[W]),L[W]=bt(c[W]);for(var O=new Array(C),I=new Array(C),E=0;E<C;E++)I[E]=bt(f[E]),O[E]=wt(f[E]);for(W=0;W<d;W++)for(E=0;E<C;E++)k[l++]=e.x*G[W]*I[E],k[l++]=e.y*G[W]*O[E],k[l++]=e.z*L[W];var z,N,R,U,S=x/2;if(_)for(W=0;W<d;W++)for(E=0;E<C;E++)k[l++]=a.x*G[W]*I[E],k[l++]=a.y*G[W]*O[E],k[l++]=a.z*L[W],b[S]=!0,0<W&&W!==d-1&&0!==E&&E!==C-1&&(w[S]=!0),S++;for(l=0,W=1;W<d-2;W++)for(z=W*C,N=(W+1)*C,E=1;E<C-2;E++)g[l++]=N+E,g[l++]=N+E+1,g[l++]=z+E+1,g[l++]=N+E,g[l++]=z+E+1,g[l++]=z+E;if(_)for(var B=d*C,W=1;W<d-2;W++)for(z=B+W*C,N=B+(W+1)*C,E=1;E<C-2;E++)g[l++]=N+E,g[l++]=z+E,g[l++]=z+E+1,g[l++]=N+E,g[l++]=z+E+1,g[l++]=N+E+1;if(_){if(h)for(U=d*C,W=1;W<C-2;W++)g[l++]=W,g[l++]=W+1,g[l++]=U+W+1,g[l++]=W,g[l++]=U+W+1,g[l++]=U+W;if(v)for(R=d*C-C,U=d*C*y-C,W=1;W<C-2;W++)g[l++]=R+W+1,g[l++]=R+W,g[l++]=U+W,g[l++]=R+W+1,g[l++]=U+W,g[l++]=U+W+1}if(A){for(W=1;W<d-2;W++)U=C*d+C*W,R=C*W,g[l++]=U,g[l++]=R+C,g[l++]=R,g[l++]=U,g[l++]=U+C,g[l++]=R+C;for(W=1;W<d-2;W++)U=C*d+C*(W+1)-1,R=C*(W+1)-1,g[l++]=R+C,g[l++]=U,g[l++]=R,g[l++]=R+C,g[l++]=U+C,g[l++]=U}var Y=new pt.GeometryAttributes;m.position&&(Y.position=new Ct.GeometryAttribute({componentDatatype:dt.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:k}));var J,X,Z,j,q=0,H=0,K=0,Q=0,$=x/2,tt=ct.Ellipsoid.fromCartesian3(e),et=ct.Ellipsoid.fromCartesian3(a);if(m.st||m.normal||m.tangent||m.bitangent){for(W=0;W<x;W++){J=b[W]?et:tt;var at,it,rt,nt,ot,mt=ct.Cartesian3.fromArray(k,3*W,ht),st=J.geodeticSurfaceNormal(mt,vt);w[W]&&ct.Cartesian3.negate(st,st),m.st&&(at=ct.Cartesian2.negate(st,kt),D[q++]=Math.atan2(at.y,at.x)/lt.CesiumMath.TWO_PI+.5,D[q++]=Math.asin(st.z)/Math.PI+.5),m.normal&&(V[H++]=st.x,V[H++]=st.y,V[H++]=st.z),(m.tangent||m.bitangent)&&(it=At,rt=0,b[W]&&(rt=$),nt=!h&&rt<=W&&W<rt+2*C?ct.Cartesian3.UNIT_X:ct.Cartesian3.UNIT_Z,ct.Cartesian3.cross(nt,st,it),ct.Cartesian3.normalize(it,it),m.tangent&&(M[K++]=it.x,M[K++]=it.y,M[K++]=it.z),m.bitangent&&(ot=ct.Cartesian3.cross(st,it,xt),ct.Cartesian3.normalize(ot,ot),T[Q++]=ot.x,T[Q++]=ot.y,T[Q++]=ot.z))}m.st&&(Y.st=new Ct.GeometryAttribute({componentDatatype:dt.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:D})),m.normal&&(Y.normal=new Ct.GeometryAttribute({componentDatatype:dt.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:V})),m.tangent&&(Y.tangent=new Ct.GeometryAttribute({componentDatatype:dt.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:M})),m.bitangent&&(Y.bitangent=new Ct.GeometryAttribute({componentDatatype:dt.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:T}))}return ut.defined(t._offsetAttribute)&&(X=k.length,Z=new Uint8Array(X/3),j=t._offsetAttribute===_t.GeometryOffsetAttribute.NONE?0:1,_t.arrayFill(Z,j),Y.applyOffset=new Ct.GeometryAttribute({componentDatatype:dt.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:Z})),new Ct.Geometry({attributes:Y,indices:g,primitiveType:Ct.PrimitiveType.TRIANGLES,boundingSphere:ft.BoundingSphere.fromEllipsoid(tt),offsetAttribute:t._offsetAttribute})}}},C.getUnitEllipsoid=function(){return ut.defined(a)||(a=C.createGeometry(new C({radii:new ct.Cartesian3(1,1,1),vertexFormat:d.VertexFormat.POSITION_ONLY}))),a},t.EllipsoidGeometry=C});
