// Dynamic import helper for project images
export const getProjectImages = async (projectId: number) => {
  try {
    switch (projectId) {
      case 1: // CoWorking, Noida
        return [
          (
            await import(
              "@/assets/Amayaas - Site Images/CoWorking, Noida/Screenshot 2025-09-11 155636.png"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/CoWorking, Noida/Screenshot 2025-09-11 155722.png"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/CoWorking, Noida/WhatsApp Image 2025-09-11 at 3.43.22 PM.jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/CoWorking, Noida/WhatsApp Image 2025-09-11 at 3.44.36 PM.jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/CoWorking, Noida/WhatsApp Image 2025-09-11 at 4.04.40 PM (1).jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/CoWorking, Noida/WhatsApp Image 2025-09-11 at 4.04.40 PM.jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/CoWorking, Noida/WhatsApp Image 2025-09-11 at 4.04.41 PM (1).jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/CoWorking, Noida/WhatsApp Image 2025-09-11 at 4.04.41 PM.jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/CoWorking, Noida/WhatsApp Image 2025-09-11 at 4.06.36 PM.jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/CoWorking, Noida/WhatsApp Image 2025-09-11 at 4.06.37 PM.jpeg"
            )
          ).default,
        ];

      case 2: // Ghaziabad
        return [
          (
            await import(
              "@/assets/Amayaas - Site Images/Ghaziabad/WhatsApp Image 2025-09-11 at 3.36.50 PM (1).jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/Ghaziabad/WhatsApp Image 2025-09-11 at 3.36.50 PM.jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/Ghaziabad/WhatsApp Image 2025-09-11 at 3.36.51 PM (1).jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/Ghaziabad/WhatsApp Image 2025-09-11 at 3.36.51 PM.jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/Ghaziabad/WhatsApp Image 2025-09-11 at 3.36.52 PM.jpeg"
            )
          ).default,
        ];

      case 3: // Infoya, Chennai
        return [
          (
            await import(
              "@/assets/Amayaas - Site Images/Infoya, Chennai/WhatsApp Image 2025-09-11 at 4.01.27 PM (1).jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/Infoya, Chennai/WhatsApp Image 2025-09-11 at 4.01.27 PM.jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/Infoya, Chennai/WhatsApp Image 2025-09-11 at 4.01.28 PM (1).jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/Infoya, Chennai/WhatsApp Image 2025-09-11 at 4.01.28 PM (2).jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/Infoya, Chennai/WhatsApp Image 2025-09-11 at 4.01.28 PM.jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/Infoya, Chennai/WhatsApp Image 2025-09-11 at 4.01.29 PM (1).jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/Infoya, Chennai/WhatsApp Image 2025-09-11 at 4.01.29 PM.jpeg"
            )
          ).default,
        ];

      case 4: // JettWings, Chandigarh
        return [
          (
            await import(
              "@/assets/Amayaas - Site Images/JettWings, Chandigarh/WhatsApp Image 2025-09-11 at 4.08.44 PM (1).jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/JettWings, Chandigarh/WhatsApp Image 2025-09-11 at 4.08.45 PM (2).jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/JettWings, Chandigarh/WhatsApp Image 2025-09-11 at 4.08.45 PM (3).jpeg"
            )
          ).default,
        ];

      case 5: // Kasna, Gr Noida
        return [
          (
            await import(
              "@/assets/Amayaas - Site Images/Kasna, Gr Noida/WhatsApp Image 2025-09-11 at 3.07.37 PM (1).jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/Kasna, Gr Noida/WhatsApp Image 2025-09-11 at 3.07.37 PM (2).jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/Kasna, Gr Noida/WhatsApp Image 2025-09-11 at 3.07.37 PM.jpeg"
            )
          ).default,
        ];

      case 6: // LogixTechnova, Noida
        return [
          (
            await import(
              "@/assets/Amayaas - Site Images/LogixTechnova, Noida/WhatsApp Image 2025-09-11 at 3.50.13 PM.jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/LogixTechnova, Noida/WhatsApp Image 2025-09-11 at 3.59.37 PM.jpeg"
            )
          ).default,
        ];

      case 7: // Mohali, Punjab
        return [
          (
            await import(
              "@/assets/Amayaas - Site Images/Mohali, Punjab/WhatsApp Image 2025-09-11 at 3.24.37 PM (1).jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/Mohali, Punjab/WhatsApp Image 2025-09-11 at 3.24.37 PM.jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/Mohali, Punjab/WhatsApp Image 2025-09-11 at 3.24.38 PM.jpeg"
            )
          ).default,
          (
            await import(
              "@/assets/Amayaas - Site Images/Mohali, Punjab/WhatsApp Image 2025-09-11 at 3.46.17 PM.jpeg"
            )
          ).default,
        ];

      default:
        return [];
    }
  } catch (error) {
    console.error(`Error loading images for project ${projectId}:`, error);
    return [];
  }
};
