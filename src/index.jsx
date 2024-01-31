import { createRoot } from "react-dom/client"
import { Canvas } from "@react-three/fiber"
import { useControls } from "leva"
import { Html } from "@react-three/drei"

import { useGLTF, Stage, OrbitControls, Edges } from "@react-three/drei"
import "./styles.css"

function Model() {
  const { nodes } = useGLTF("./tree.glb")
  const { color, opacity, bgColor } = useControls({
    opacity: { value: 0.75, min: 0, max: 1 },
    color: "#c8f8dc"
  })
  return (
    <group dispose={null}>
      <mesh geometry={nodes["Black_Locust_01_-_Middle-Aged_-_Summer_-_Full"].geometry} rotation={[0, 4, 0]}>
        <meshToonMaterial color={color} opacity={opacity} transparent />
        <Edges />
        <Html distanceFactor={20}>
          <div class="content">Black Locust</div>
        </Html>
      </mesh>
    </group>
  )
}

createRoot(document.getElementById("root")).render(
  <Canvas style={{ background: "#c8f8dc" }} dpr={[1, 2]} camera={{ position: [0, 30, 30], fov: 50 }}>
    <Stage contactShadow={{ resolution: 1024, scale: 10 }}>
      <Model />
    </Stage>
    <OrbitControls makeDefault dampingFactor={0.3} />
  </Canvas>
)
