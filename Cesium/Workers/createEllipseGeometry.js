define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-a8ce88a9","./Transforms-31e2659a","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-60f5bf9c","./GeometryAttributes-4fcfcf40","./AttributeCompression-88d6db09","./GeometryPipeline-0fe98df4","./EncodedCartesian3-e3c09f89","./IndexDatatype-53503fee","./IntersectionTests-836e8b79","./Plane-ef10ab79","./GeometryOffsetAttribute-7350d9af","./VertexFormat-7572c785","./EllipseGeometryLibrary-26bf7dc2","./GeometryInstance-bedf2684","./EllipseGeometry-29a5b64d"],function(r,e,t,n,i,a,c,o,s,f,d,l,b,m,p,y,u,G,C,E,A){"use strict";return function(e,t){return r.defined(t)&&(e=A.EllipseGeometry.unpack(e,t)),e._center=n.Cartesian3.clone(e._center),e._ellipsoid=n.Ellipsoid.clone(e._ellipsoid),A.EllipseGeometry.createGeometry(e)}});
