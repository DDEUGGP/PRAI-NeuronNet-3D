using UnityEngine;

public class CortexVisualizer : MonoBehaviour {
    public GameObject cortexModel;

    void Start() {
        Instantiate(cortexModel, Vector3.zero, Quaternion.identity);
    }
}
