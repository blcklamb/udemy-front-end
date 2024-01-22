import * as THREE from "three";
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export const ShowRoom = () => {
  const { raycaster } = useThree();
  const gltf = useLoader(GLTFLoader, "./models/custom.glb");

  const shoesClick = () => {
    const intersects = raycaster.intersectObjects(gltf.scene.children);

    if (intersects.length > 0) {
      const clickedObject = intersects[0].object as THREE.Mesh;
      const firstMaterial =
        clickedObject.material as THREE.MeshStandardMaterial;
      const cloneMaterial = firstMaterial.clone();

      cloneMaterial.color.set("red");
      clickedObject.material = cloneMaterial;
    }
  };
  return (
    <>
      <primitive object={gltf.scene} onClick={shoesClick} />
    </>
  );
};
