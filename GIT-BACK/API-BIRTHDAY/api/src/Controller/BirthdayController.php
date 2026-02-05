<?php

namespace App\Controller;

use App\Entity\Birthday;
use App\Repository\BirthdayRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController; // Optionnel mais propre
use Symfony\Component\Routing\Attribute\Route; // <--- C'est celle-ci la plus importante !
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/api/birthdays')]
class BirthdayController extends AbstractController
{
    // 1. VOIR TOUS LES ANNIVERSAIRES (GET)
    #[Route('', name: 'api_birthday_index', methods: ['GET'])]
    public function index(BirthdayRepository $repository, SerializerInterface $serializer): JsonResponse
    {
        $birthdays = $repository->findAll();
        
        // Utilisation des Groups définis dans l'entité
        $json = $serializer->serialize($birthdays, 'json', ['groups' => 'birthday:read']);
        
        return new JsonResponse($json, Response::HTTP_OK, [], true);
    }

    // 2. AJOUTER UN ANNIVERSAIRE (POST)
    #[Route('', name: 'api_birthday_create', methods: ['POST'])]
    public function create(Request $request, SerializerInterface $serializer, EntityManagerInterface $em): JsonResponse
    {
        // On transforme le JSON reçu en objet Birthday
        $birthday = $serializer->deserialize($request->getContent(), Birthday::class, 'json');

        // On peut forcer l'utilisateur connecté ici plus tard (security)
        
        $em->persist($birthday);
        $em->flush();

        return new JsonResponse(['status' => 'Anniversaire créé !'], Response::HTTP_CREATED);
    }

    // 3. MODIFIER UN ANNIVERSAIRE (PUT)
    #[Route('/{id}', name: 'api_birthday_update', methods: ['PUT'])]
    public function update(Birthday $birthday, Request $request, SerializerInterface $serializer, EntityManagerInterface $em): JsonResponse
    {
        // On met à jour l'objet existant au lieu d'en créer un nouveau
        $serializer->deserialize($request->getContent(), Birthday::class, 'json', [
            'object_to_populate' => $birthday
        ]);

        $em->flush();

        return new JsonResponse(['status' => 'Anniversaire mis à jour']);
    }

    // 4. SUPPRIMER UN ANNIVERSAIRE (DELETE)
    #[Route('/{id}', name: 'api_birthday_delete', methods: ['DELETE'])]
    public function delete(Birthday $birthday, EntityManagerInterface $em): JsonResponse
    {
        $em->remove($birthday);
        $em->flush();

        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }
}