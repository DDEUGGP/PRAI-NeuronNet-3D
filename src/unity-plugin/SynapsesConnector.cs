using UnityEngine;

public class SynapseConnector : MonoBehaviour {
    public GameObject source;
    public GameObject target;

    void Connect() {
        Debug.DrawLine(source.transform.position, target.transform.position, Color.cyan);
    }
}
