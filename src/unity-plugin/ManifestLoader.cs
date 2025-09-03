using UnityEngine;
using System.IO;

public class ManifestLoader : MonoBehaviour {
    public string manifestPath;

    void LoadManifest() {
        string content = File.ReadAllText(manifestPath);
        Debug.Log("Manifest Loaded: " + content);
    }
}
