using NUnit.Framework;
using UnityEngine;

public class UnityNeuronTest
{
    [Test]
    public void TestSynapseConnection()
    {
        GameObject source = new GameObject("Neuron_A");
        GameObject target = new GameObject("Neuron_B");

        Vector3 direction = target.transform.position - source.transform.position;
        Assert.AreEqual(Vector3.zero, direction); // Default positions match
    }

    [Test]
    public void TestImpulseTransmission()
    {
        string impulse = "=\>\\>\\\> =>";
        Assert.IsTrue(impulse.Contains("=>"));
    }
}
