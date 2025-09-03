import bpy

def export_yggdrasil_model():
    bpy.ops.export_scene.gltf(filepath="neuronnet.glb", export_format='GLB')
    print("✅ Yggdrasil neuronnet.glb exportiert.")

def export_cortex_nodes():
    bpy.ops.export_scene.gltf(filepath="cortex.glb", export_format='GLB')
    print("✅ Cortex Nodes exportiert.")

def export_synapse_links():
    bpy.ops.export_scene.gltf(filepath="synapse.glb", export_format='GLB')
    print("✅ Synapse Links exportiert.")

export_yggdrasil_model()
export_cortex_nodes()
export_synapse_links()
