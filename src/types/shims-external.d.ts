// Shims for optional runtime dependencies used by some UI components.
// Install the real packages for full typing and runtime behavior:
// npm install motion @react-three/fiber three

declare module "motion/react" {
  export const motion: any;
  export const useMotionValue: any;
  export const useMotionTemplate: any;
  export default motion;
}

declare module "@react-three/fiber" {
  export const Canvas: any;
  export const useFrame: any;
  export const useThree: any;
  export default Canvas;
}

declare module "three" {
  const THREE: any;
  export = THREE;
}

// Minimal JSX and THREE shims for react-three-fiber usage in optional components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      planeGeometry: any;
      primitive: any;
    }
  }

  namespace THREE {
    type Mesh = any;
    class Vector2 {
      constructor(x?: number, y?: number);
      fromArray(arr: number[]): any;
    }
    class Vector3 {
      fromArray(arr: number[]): any;
    }
    const GLSL3: any;
    class ShaderMaterial {
      constructor(...args: any[]);
    }
    const CustomBlending: any;
    const SrcAlphaFactor: any;
    const OneFactor: any;
  }
}
