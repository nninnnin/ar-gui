## AR GUI

파라미터를 조정하여 모델의 위치와 크기 등을 조절할 수 있는 GUI를 손쉽게 생성할 수 있습니다.

```ts
import ModelControls from "@rebel9/ar-gui";

new ModelControls("your-model-id", {
  positionY: {
    start: 50, // default value: 0
    min: 0, // default value: -1
    max: 100, // default value: 1
    name: "Y축 높이",
    onChange: function () {
      console.log("position y is changing");
    },
  },
  rotationY: true,
  scale: true,
});
```
